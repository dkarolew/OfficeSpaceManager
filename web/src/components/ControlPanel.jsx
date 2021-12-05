import React, {useState} from "react";
import SectorList from "./SectorList";


const ControlPanel = () => {

    const [showAddUserFrom, setShowAddUserFrom] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const addUser = async (user) => {
        await fetch('http://localhost:8080/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!firstName || !lastName || !lastName) {
            alert('Please full fill user info')
            return
        }

        addUser({firstName, lastName, email}).then(r => console.log(r))

        setFirstName('')
        setLastName('')
        setEmail('')
    }

    return (
        <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
            <h2 style={{textAlign: 'left'}}>ADMIN PANEL</h2>
            <p style={{textAlign: 'left', paddingTop: '20px'}}>
                This is admin panel where you can track statistics on
                how the system is working and generate reports. You can
                also manage <br/> your system from this panel here.
            </p>
            {showAddUserFrom ? (
                <div style={{width: '50%', paddingLeft: '40px'}}>
                    <form className='add-form' onSubmit={onSubmit} style={{paddingTop: '20px'}}>
                        <div className='form-control'>
                            <label>First name</label>
                            <input
                                type='text'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Last name</label>
                            <input
                                type='text'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Email</label>
                            <input
                                type='text'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div style={{width: '70%', paddingLeft: '150px'}}>
                            <input
                                type='submit'
                                value='Save'
                                className='btn btn-block'
                                style={{background: 'darkgreen'}}
                            />
                        </div>
                        <div style={{width: '70%', paddingLeft: '150px'}}>
                            <input
                                value='Cancel'
                                onClick={() => setShowAddUserFrom(false)}
                                className='btn btn-block'
                                style={{background: 'darkred'}}
                            />
                        </div>
                    </form>
                </div>
                ) : (
                <div style={{paddingTop: '30px'}}>
                    <a
                        style={{width: '250px', background: 'darkblue', border: 'black'}}
                        className="btn btn-primary"
                        onClick={() => setShowAddUserFrom(true)}>
                        Add new user
                    </a>
                </div>
            )}

            <div style={{paddingTop: '20px'}}>
                <a
                    style={{background: 'black', border: 'black', width: '250px', height: '40px'}}
                    className="btn btn-primary"
                    href='http://localhost:8080/api/v1/reports/generate'
                    download>
                    Download reservation report
                </a>
            </div>
            <SectorList />
        </div>
    )
}

export default ControlPanel