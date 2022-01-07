import React, {useContext, useState} from 'react'
import '../index.css'
import Select from 'react-dropdown-select';
import {UserContext} from "../utils/UserContext";

const ReservationForm = () => {

    // @ts-ignore
    const {userInfo} = useContext(UserContext);

    const [place, setPlace] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [equipment, setEquipment] = useState([])
    const [reminderEmail, setReminderEmail] = useState(false)
    const [reservationError, setReservationError] = useState(false)

    const equipmentOptions = [
        { value: 'MONITOR', label: 'Monitor' },
        { value: 'KEYBOARD', label: 'Keyboard' },
        { value: 'MOUSE', label: 'Mouse' }
    ];

    const sendReservation = async (reservation) => {
        await fetch('http://localhost:8080/api/v1/reservations', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(reservation),
        }).then(response => {
            if (response?.status === 500) {
                setReservationError(true)
            }
            if (response?.status === 200) {
                setReservationError(false)
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userId = userInfo.userId;
        const teamCode = userInfo.teamCode;

        if (!fromDate || !toDate || !place) {
            alert('Please full fill reservation')
            return
        }

        sendReservation({userId, place, fromDate, toDate, teamCode, equipment, reminderEmail})

        setPlace('')
        setFromDate('')
        setToDate('')
        setEquipment([])
        setReminderEmail(false)
    }

    const dateAfter7Days = (date) => {
        let chooseDate = new Date(date);
        chooseDate.setDate(chooseDate.getDate() + 14);
        return chooseDate.toISOString().split('T')[0];
    }

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} style={{paddingTop: '120px'}}>
                <div className='form-control'>
                    <label>Place</label>
                    <input
                        type='text'
                        placeholder='Place number'
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
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
                {reservationError && <p style={{color: 'darkred', paddingLeft: '130px', fontSize: '20px', fontWeight: 'bold'}}>Error during reservation.</p>}
                <input type='submit' value='Save reservation' className='btn btn-block' style={{background: 'black'}}/>
            </form>
        </>
    )
}

export default ReservationForm