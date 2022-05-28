import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_BASE_URL} from "../utils/constans";


const ControlPanel = () => {

    const [showAddUserFrom, setShowAddUserFrom] = useState(false);
    const [userId, setUserId] = useState('')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [teamCode, setTeamCode] = useState('');
    const [password, setPassword] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [users, setUsers] = useState([]);
    const [showRemoveUser, setShowRemoveUser] = useState(false);

    const addUser = async (user) => {
        await fetch(API_BASE_URL + '/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!firstName || !lastName || !lastName || !teamCode || !password || !expirationDate) {
            alert('Please full fill user info')
            return
        }

        addUser({firstName, lastName, email, teamCode, password, expirationDate})

        setFirstName('')
        setLastName('')
        setEmail('')
        setTeamCode('')
        setPassword('')
        setExpirationDate('')
    }

    const fetchUsers = async () => {
        return axios.get(API_BASE_URL + '/users');
    }

    const removeUser = async (userId: string) => {
        await axios.delete(API_BASE_URL + `/users/${userId}`);
    }

    useEffect(() => {
        fetchUsers().then(response => setUsers(response.data))
    }, [users])

    return (
        <div style={{paddingTop: '80px', paddingLeft: '30px'}}>
            <h2 style={{textAlign: 'left'}}>ADMIN PANEL</h2>
            <p style={{textAlign: 'left', paddingTop: '20px'}}>
                This is admin panel where you can track statistics on
                how the system is working and generate reports. You can
                also manage <br/> your system from this panel here.
            </p>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>User ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Expiration date</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => {
                    return (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.expirationDate}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
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
                        <div className='form-control'>
                            <label>Team</label>
                            <input
                                type='text'
                                value={teamCode}
                                onChange={(e) => setTeamCode(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Password</label>
                            <input
                                type='text'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='form-control'>
                            <label>Expiration date</label>
                            <input
                                type='date'
                                value={expirationDate}
                                onChange={(e) => setExpirationDate(e.target.value)}
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
                    <button
                        style={{width: '250px', background: 'darkblue', border: 'black'}}
                        className="btn btn-primary"
                        onClick={() => setShowAddUserFrom(true)}>
                        Add new user
                    </button>
                </div>
            )}
            {showRemoveUser ? (
                <div style={{width: '50%', paddingLeft: '30px'}}>
                    <form className='add-form' onSubmit={() => removeUser(userId)} style={{paddingTop: '30px'}}>
                        <div className='form-control'>
                            <label>User ID</label>
                            <input
                                type='text'
                                placeholder='ID'
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                            />
                        </div>
                        <input type='submit' value='Save' className='btn btn-block' style={{background: 'black'}}/>
                        <input value='Hide' className='btn btn-block' style={{background: 'darkblue'}} onClick={() => setShowRemoveUser(false)}/>
                    </form>
                </div>
            ) : (
                <div style={{paddingTop: '20px'}}>
                    <button
                        style={{background: 'darkred', border: 'black', width: '250px', height: '40px'}}
                        className="btn btn-primary"
                        onClick={() => setShowRemoveUser(true)}>
                        Remove user
                    </button>
                </div>
            )}

            <div style={{paddingTop: '20px'}}>
                <a
                    style={{background: 'black', border: 'black', width: '250px', height: '40px'}}
                    className="btn btn-primary"
                    href={API_BASE_URL + '/reports/generate'}
                    download>
                    Download reservation report
                </a>
            </div>
        </div>
    )
}

export default ControlPanel