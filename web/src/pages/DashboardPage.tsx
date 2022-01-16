import React, {useContext, useEffect, useState} from 'react';
import NavBar from "../components/NavBar";
import Select from "react-dropdown-select";
import axios from "axios";
import {UserContext} from "../utils/UserContext";
import LoginWrapper from "../components/LoginWrapper";


const DashboardPage = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const [reservationId, setReservationId] = useState('')
    const [reservations, setReservations] = useState<any[]>([])
    const [reservationInfo, setReservationInfo] = useState<any[]>([])
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [equipment, setEquipment] = useState([])
    const [reminderEmail, setReminderEmail] = useState(false)
    const [showModifyReservation, setShowModifyReservation] = useState(false);
    const [showDeleteReservation, setShowDeleteReservation] = useState(false);

    const equipmentOptions = [
        { value: 'MONITOR', label: 'Monitor' },
        { value: 'KEYBOARD', label: 'Keyboard' },
        { value: 'MOUSE', label: 'Mouse' }
    ];

    const dateAfter7Days = (date: string | number | Date) => {
        let chooseDate = new Date(date);
        chooseDate.setDate(chooseDate.getDate() + 14);
        return chooseDate.toISOString().split('T')[0];
    }

    const updateReservation = async (reservation : any, reservationId : string) => {
        await fetch(`http://localhost:8080/api/v1/reservations/${reservationId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reservation),
        })
    }

    const deleteReservation = async (reservationId: string) => {
        await axios.delete(`http://localhost:8080/api/v1/reservations/${reservationId}`);
    }

    const onSubmit = (e : any) => {
        e.preventDefault()

        if (!fromDate) {
            alert('Please full fill reservation')
            return
        }

        updateReservation({fromDate, toDate, equipment, reminderEmail}, reservationId)

        setReservationId('')
        setFromDate('')
        setToDate('')
        setEquipment([])
        setReminderEmail(false)
        setShowModifyReservation(false)
    }

    const fetchReservations = async (userId: number) => {
        return axios.get(`http://localhost:8080/api/v1/reservations/${userId}`)
            .then(response => setReservations(response.data));
    }

    const fetchReservationDetails = async (reservationId: number) => {
        return axios.get(`http://localhost:8080/api/v1/reservations/${reservationId}/details`)
            .then(response => {
                // @ts-ignore
                setReservationInfo(prev => [...prev, response.data]);
            });
    }

    useEffect(() => {
        fetchReservations(userInfo.userId)
    }, [userInfo])

    useEffect(() => {
        reservations.forEach(r => fetchReservationDetails(r.id))
    }, [reservations])

    return (
        <LoginWrapper isLoggedIn={userInfo.isLoggedIn}>
            <NavBar />
            <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
                <h2 style={{textAlign: 'left'}}>DASHBOARD</h2>
                <p style={{textAlign: 'left', paddingTop: '20px'}}>
                    Here you can view your current reservations and manage them.
                </p>
                <h4 style={{textAlign: 'left'}}>Reservations details:</h4>
                <table className="styled-table">
                    <thead>
                    <tr>
                        <th>Reservation ID</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Place</th>
                        {/*<th>Team code</th>*/}
                        {/*<th>Additional equipment</th>*/}
                        <th>Email notifications</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reservations.map((reservation, index) => {
                        return (
                            <tr key={index}>
                                <td>{reservation.id}</td>
                                <td>{reservation.dateStart}</td>
                                <td>{reservation.dateEnd}</td>
                                <td>{reservationInfo[index]?.place.startsWith("DESK") ?
                                    'P' + reservationInfo[index]?.place.substring(4) :
                                    'R' + reservationInfo[index]?.place.substring(4)}
                                </td>
                                {/*<td>{reservationInfo[index]?.teamCode}</td>*/}
                                {/*<td>MONITOR, KEYBOARD</td>*/}
                                <td>{reservationInfo[index]?.reminderEmail ? 'Yes' : 'No'}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                {showModifyReservation ? (
                    <div style={{width: '50%', paddingLeft: '30px'}}>
                        <form className='add-form' onSubmit={onSubmit} style={{paddingTop: '30px'}}>
                            <div className='form-control'>
                                <label>Reservation ID</label>
                                <input
                                    type='text'
                                    placeholder='ID'
                                    value={reservationId}
                                    onChange={(e) => setReservationId(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label>From</label>
                                <input
                                    type='date'
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label>To</label>
                                <input
                                    type='date'
                                    value={toDate ? toDate : fromDate}
                                    min={fromDate}
                                    max={fromDate ? dateAfter7Days(fromDate) : ''}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label>Additional equipment</label>
                                <Select
                                    multi={true}
                                    disabled={false}
                                    dropdownHeight={'100px'}
                                    // @ts-ignore
                                    onChange={(eq) => setEquipment(eq)}
                                    options={equipmentOptions}
                                    values={equipment}
                                />
                            </div>
                            <div className='form-control form-control-check'>
                                <label>Send reminder email</label>
                                <input
                                    type='checkbox'
                                    checked={reminderEmail}
                                    onChange={(e) => setReminderEmail(e.currentTarget.checked)}
                                />
                            </div>
                            <input type='submit' value='Save' className='btn btn-block' style={{background: 'black'}}/>
                            <input value='Hide' className='btn btn-block' style={{background: 'darkblue'}} onClick={() => setShowModifyReservation(false)}/>
                        </form>
                    </div>
                    ) : (
                    <div style={{paddingTop: '20px'}}>
                        <button
                            style={{background: 'darkblue', border: 'black', width: '250px', height: '40px'}}
                            className="btn btn-primary"
                            onClick={() => setShowModifyReservation(true)}>
                            Modify reservation
                        </button>
                    </div>
                )}
                {showDeleteReservation ? (
                    <div style={{width: '50%', paddingLeft: '30px'}}>
                        <form className='add-form' onSubmit={() => deleteReservation(reservationId)} style={{paddingTop: '30px'}}>
                            <div className='form-control'>
                                <label>Reservation ID</label>
                                <input
                                    type='text'
                                    placeholder='ID'
                                    value={reservationId}
                                    onChange={(e) => setReservationId(e.target.value)}
                                />
                            </div>
                            <input type='submit' value='Save' className='btn btn-block' style={{background: 'black'}}/>
                            <input value='Hide' className='btn btn-block' style={{background: 'darkblue'}} onClick={() => setShowDeleteReservation(false)}/>
                        </form>
                    </div>
                ) : (
                    <div style={{paddingTop: '20px'}}>
                        <button
                            style={{background: 'darkred', border: 'black', width: '250px', height: '40px'}}
                            className="btn btn-primary"
                            onClick={() => setShowDeleteReservation(true)}>
                            Cancel reservation
                        </button>
                    </div>
                )}
            </div>
        </LoginWrapper>
    )
}

export default DashboardPage