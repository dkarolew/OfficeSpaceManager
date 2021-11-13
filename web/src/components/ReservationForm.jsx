import { useState } from 'react'
import '../index.css'

const ReservationForm = () => {

    const [date, setDate] = useState('')
    const [teamCode, setTeamCode] = useState('')
    const [equipment, setEquipment] = useState('')
    const [reminderEmail, setReminderEmail] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!date || !teamCode) {
            alert('Please full fill reservation')
            return
        }

        setDate('')
        setTeamCode('')
        setEquipment('')
        setReminderEmail(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Date</label>
                <input
                    type='text'
                    placeholder='Date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                <input
                    type='text'
                    placeholder='Equipment'
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
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

            <input type='submit' value='Save reservation' className='btn btn-block' style={{color: 'black'}} />
        </form>
    )
}

export default ReservationForm