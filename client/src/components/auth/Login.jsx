import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }

        if (error === 'Invalid Credentials') {
            alert(error); // Simple alert for now or use a toast
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            alert('Please fill in all fields');
        } else {
            login({
                email,
                password
            });
        }
    };

    return (
        <div className='form-container'>
            <div className="card fade-in">
                <h1 className='form-title'>
                    Account <span className='text-primary'>Login</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email Address</label>
                        <input
                            id='email'
                            className="form-control"
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className="form-control"
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            required
                        />
                    </div>
                    <input
                        type='submit'
                        value='Login'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div>
        </div>
    );
};

export default Login;
