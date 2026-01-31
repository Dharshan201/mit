import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className='landing'>
            <div className='landing-content'>
                <h1 className='landing-title'>
                    <span className='gradient-text'>Contact Manager</span>
                </h1>
                <p className='landing-subtitle'>
                    The modern way to organize and manage all your contacts in one place.
                    Simple, fast, and beautifully designed.
                </p>
                <div className='landing-buttons'>
                    <Link to='/register' className='btn btn-large'>
                        Get Started Free
                    </Link>
                    <Link to='/login' className='btn btn-outline btn-large'>
                        Sign In
                    </Link>
                </div>
                <div className='landing-features'>
                    <div className='feature'>
                        <span className='feature-icon'>📱</span>
                        <span>Easy to Use</span>
                    </div>
                    <div className='feature'>
                        <span className='feature-icon'>🔒</span>
                        <span>Secure & Private</span>
                    </div>
                    <div className='feature'>
                        <span className='feature-icon'>⚡</span>
                        <span>Lightning Fast</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
