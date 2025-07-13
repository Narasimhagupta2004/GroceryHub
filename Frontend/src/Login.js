import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const submitHandler = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/login', data);
            setSuccess("Login successful!");
            localStorage.setItem('token', response.data.token);

            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            setError(error.response ? error.response.data : "Login failed!");
        }
    };

    return (
        <div className="login-container">
            <center>
                <form onSubmit={submitHandler} className="login-form-container">
                    <h3>Login</h3>
                    {error && <div className="error-message">{error}</div>}
                    {success && <div className="success-message">{success}</div>}
                    <input type='email' name='email' placeholder='Email' value={data.email} onChange={changeHandler} required /><br />
                    <input type='password' name='password' placeholder='Password' value={data.password} onChange={changeHandler} required /><br />
                    <input type='submit' value="Login" />
                    <br/>
                    <p>Don't Have an account? 
   <button type="button" className="register-button" onClick={() => navigate('/register')}>Register</button>
</p>
                </form>
            </center>
        </div>
    );
}

export default Login;