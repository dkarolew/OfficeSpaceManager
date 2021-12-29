import React, { useState } from 'react'
import '../index.css'
import Select from 'react-dropdown-select';

const ReservationForm = () => {

    const [place, setPlace] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    const [teamCode, setTeamCode] = useState('')
    const [equipment, setEquipment] = useState([])
    const [reminderEmail, setReminderEmail] = useState(false)

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
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!fromDate || !teamCode || !place) {
            alert('Please full fill reservation')
            return
        }

        sendReservation({place, fromDate, toDate, teamCode, equipment, reminderEmail}).then(r => console.log(r))

        setPlace('')
        setFromDate('')
        setToDate('')
        setTeamCode('')
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
            </form>
        </>
    )
}

export default ReservationForm