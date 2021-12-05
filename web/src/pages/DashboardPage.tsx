import React, {useState} from 'react';
import NavBar from "../components/NavBar";
import CommentsSection from "../components/CommentsSection";
import Select from "react-dropdown-select";


const DashboardPage = () => {

    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [teamCode, setTeamCode] = useState('')
    const [equipment, setEquipment] = useState([])
    const [reminderEmail, setReminderEmail] = useState(false)
    const [showModifyReservation, setShowModifyReservation] = useState(false);

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

    const updateReservation = async (reservation: { fromDate: string; toDate: string; teamCode: string; equipment: never[]; reminderEmail: boolean; }) => {
        await fetch('http://localhost:8080/api/v1/reservations', {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reservation),
        })
    }

    const deleteReservation = async () => {
        await fetch(`http://localhost:8080/api/v1/reservations/{reservationId}`, {
            method: 'DELETE'
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!fromDate || !teamCode) {
            alert('Please full fill reservation')
            return
        }

        updateReservation({fromDate, toDate, teamCode, equipment, reminderEmail}).then(r => console.log(r))

        setFromDate('')
        setToDate('')
        setTeamCode('')
        setEquipment([])
        setReminderEmail(false)
        setShowModifyReservation(false)
    }

    return (
        <>
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
                        <th>Place</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Team code</th>
                        <th>Additional equipments</th>
                        <th>Email notifications</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>P7</td>
                        <td>12-08-2020</td>
                        <td>15-08-2020</td>
                        <td>T-19</td>
                        <td>Monitor, Keyboard</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>P16</td>
                        <td>04-11-2020</td>
                        <td>05-11-2020</td>
                        <td>T-19</td>
                        <td>Mouse</td>
                        <td>No</td>
                    </tr>
                    </tbody>
                </table>
                {showModifyReservation ? (
                    <div style={{width: '50%', paddingLeft: '30px'}}>
                        <form className='add-form' onSubmit={onSubmit} style={{paddingTop: '30px'}}>
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
                                <label>Team code</label>
                                <input
                                    type='text'
                                    placeholder='Code'
                                    value={teamCode}
                                    onChange={(e) => setTeamCode(e.target.value)}
                                />
                            </div>
                            <div className='form-control'>
                                <label>Additional equipment</label>
                                <Select
                                    multi={true}
                                    disabled={false}
                                    dropdownHeight={'100px'}
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
                                    value={reminderEmail}
                                    onChange={(e) => setReminderEmail(e.currentTarget.checked)}
                                />
                            </div>
                            <input type='submit' value='Save reservation' className='btn btn-block' style={{background: 'black'}}/>
                            <input value='Hide' className='btn btn-block' style={{background: 'darkblue'}} onClick={() => setShowModifyReservation(false)}/>
                        </form>
                    </div>
                    ) : (
                    <div style={{paddingTop: '20px'}}>
                        <a
                            style={{background: 'darkblue', border: 'black', width: '250px', height: '40px'}}
                            className="btn btn-primary"
                            onClick={() => setShowModifyReservation(true)}>
                            Modify reservation
                        </a>
                    </div>
                )}
                <div style={{paddingTop: '20px'}}>
                    <a
                        style={{background: 'red', border: 'black', width: '250px', height: '40px'}}
                        className="btn btn-primary"
                        onClick={deleteReservation}>
                        Cancel reservation
                    </a>
                </div>
            </div>
            <CommentsSection/>
        </>
    )
}

export default DashboardPage