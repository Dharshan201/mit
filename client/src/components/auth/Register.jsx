import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const authContext = useContext(AuthContext);
    const { register, error, clearErrors, isAuthenticated } = authContext;
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }

        if (error === 'User already exists') {
            alert(error);
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, navigate]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { name, email, password, confirmPassword } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            alert('Please enter all fields');
        } else if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            register({
                name,
                email,
                password
            });
        }
    };

    return (
        <div className='form-container'>
            <div className="card fade-in">
                <h1 className='form-title'>
                    Account <span className='text-primary'>Register</span>
                </h1>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className="form-control"
                            type='text'
                            name='name'
                            value={name}
                            onChange={onChange}
                            required
                        />
                    </div>
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
                            minLength='6'
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            id='confirmPassword'
                            className="form-control"
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={onChange}
                            required
                            minLength='6'
                        />
                    </div>
                    <input
                        type='submit'
                        value='Register'
                        className='btn btn-primary btn-block'
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;
