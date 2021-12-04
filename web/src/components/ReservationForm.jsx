import React, { useState } from 'react'
import '../index.css'
import Select from 'react-dropdown-select';

const ReservationForm = () => {

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

        if (!fromDate || !teamCode) {
            alert('Please full fill reservation')
            return
        }

        sendReservation({fromDate, toDate, teamCode, equipment, reminderEmail}).then(r => console.log(r))

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
            {2 > 1 ? (
                <form className='add-form' onSubmit={onSubmit} style={{paddingTop: '80px'}}>
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
                    <input type='submit' value='Save reservation' className='btn btn-block' style={{color: 'black'}}/>
                </form>
            ) : (
                <div style={{paddingTop: '80px'}}>
                    <h1>Rendering...</h1>
                </div>
            )}
        </>
    )
}

export default ReservationForm