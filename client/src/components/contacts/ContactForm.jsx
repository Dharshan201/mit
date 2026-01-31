import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal' // default
            });
        }
    }, [ContactContext, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal' // default
    });

    const { name, email, phone, type } = contact;

    const onChange = e =>
        setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    };

    const clearAll = () => {
        clearCurrent();
    };

    return (
        <form onSubmit={onSubmit} className="card fade-in">
            <h2 className='text-primary'>
                {current ? 'Edit Contact' : 'Add Contact'}
            </h2>
            <div className="form-group">
                <input
                    className="form-control"
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    className="form-control"
                    type='text'
                    placeholder='Phone'
                    name='phone'
                    value={phone}
                    onChange={onChange}
                    required
                />
            </div>
            <div className="form-group">
                <h4>Contact Type</h4>
                <input
                    type='radio'
                    name='type'
                    value='personal'
                    checked={type === 'personal'}
                    onChange={onChange}
                />{' '}
                Personal{' '}
                <input
                    type='radio'
                    name='type'
                    value='professional'
                    checked={type === 'professional'}
                    onChange={onChange}
                />{' '}
                Professional
            </div>
            <div>
                <input
                    type='submit'
                    value={current ? 'Update Contact' : 'Add Contact'}
                    className='btn btn-primary btn-block'
                />
            </div>
            {current && (
                <div>
                    <button className='btn btn-secondary btn-block' onClick={clearAll} style={{ marginTop: '10px' }}>
                        Clear
                    </button>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
