import React, {useState} from 'react'
import '../index.css'

const AdminForm = () => {

    const [place, setPlace] = useState('')

    const updatePlace = async (place: string) => {
        await fetch(`http://localhost:8080/api/v1/places/${place}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!place) {
            alert('Please fill form')
            return
        }

        updatePlace(place)

        setPlace('')
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
                <input type='submit' value='Change state' className='btn btn-block' style={{background: 'black'}}/>
            </form>
        </>
    )
}

export default AdminForm