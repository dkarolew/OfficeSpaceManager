import React, {useState} from "react";


const LoginPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (!login || !password) {
            alert('Login or password was not provided')
            return
        }

        setLogin('')
        setPassword('')
        window.location.href = '/'
    }

    return (
        <>
        <header>
            <h1 style={{margin: '80px', textAlign: 'center'}}>Office Space Manager</h1>
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

                    <input style={{background: 'black'}} type='submit' value='Log in' className='btn btn-block'/>
                </form>
            </div>
        </>
    )
}

export default LoginPage