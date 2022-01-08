import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../utils/UserContext";


const LoginPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    // @ts-ignore
    const {setUserInfo} = useContext(UserContext);

    useEffect(() => {
        setUserInfo({
            userId: '',
            firstName: '',
            lastName: '',
            email: '',
            teamCode: '',
            role: '',
            isLoggedIn: false})
    }, [setUserInfo])

    const logIn = async (credentials: { login: string, password: string }) => {
        await fetch('http://localhost:8080/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        }).then(response => {
            if (response?.status === 500) {
                setLoginError(true)
            }
            if (response?.status === 200) {
                setLoginError(false)
                response.json().then(r => {
                    setUserInfo({
                        userId: r.userId,
                        firstName: r.firstName,
                        lastName: r.lastName,
                        email: r.email,
                        teamCode: r.teamCode,
                        role: r.role,
                        isLoggedIn: true})
                })
                window.location.href = '/'
            }
        })
    }

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (!login || !password) {
            alert('Login or password was not provided')
            return
        }

        logIn({login, password})
    }

    return (
        <>
            <header>
                <h1 style={{margin: '120px', textAlign: 'center', fontSize: '60px', paddingLeft: '20px'}}>Office Space Manager</h1>
            </header>
            <div className='login-box'>
                <form className='login-form' onSubmit={onSubmit}>
                    <div className='login-form-control'>
                        <label>Login</label>
                        <input
                            type='text'
                            placeholder='Enter login'
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}/>
                    </div>
                    <div className='login-form-control'>
                        <label>Password</label>
                        <input
                            type='password'
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div style={{paddingLeft: '30px'}}>
                        <input style={{background: 'black'}} type='submit' value='Log in' className='btn btn-block'/>
                    </div>
                </form>
                {loginError && <p style={{color: 'darkred', paddingLeft: '340px', paddingTop: '20px', fontSize: '22px', fontWeight: 'bold'}}>Invalid credentials.</p>}
            </div>
        </>
    )
}

export default LoginPage