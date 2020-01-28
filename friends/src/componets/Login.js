import React, {useState} from 'react';
import axios from 'axios';

function Login(props)
{
    const [credentials, setCredentials] = useState({username: '', password: ''});

    const {history} = props;

    const handleChange = e =>
    {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value});
    }

    const login = e =>
    {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
        .then(response =>
        {
            localStorage.setItem('token', response.data.payload);
            history.push('/friends-list');
        })
        .catch(error => console.log(error));
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