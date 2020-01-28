import React, {useState} from 'react';
import axios from 'axios';

function Login()
{
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const handleChange = e =>
    {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value});
    }

    const login = e =>
    {
        e.preventDefault();
    }
    return (
        <div className='login-form'>
            <form onSubmit={login}>
                <input 
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}/>
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}/>
                <button>Log in</button>
            </form>
        </div>
    );
}

export default Login;