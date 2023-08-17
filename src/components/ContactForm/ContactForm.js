import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css';

function ContactForm() {
    const { register, handleSubmit, reset } = useForm();
    const [submissionMessage, setSubmissionMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setSubmissionMessage('Form submitted successfully!');
                reset();
            } else {
                console.error('Error submitting form');
                setSubmissionMessage('Error submitting form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" {...register('name')} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" {...register('email')} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" {...register('message')}></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            {submissionMessage && <p className="submission-message">{submissionMessage}</p>}
        </div>
    );
}

export default ContactForm;