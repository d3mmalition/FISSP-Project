import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './ContactForm.css'; // Import the shared CSS file


const serverUrl = process.env.REACT_APP_SERVER_URL;

function ContactForm() {
    const { register, handleSubmit, reset } = useForm();
    const [submissionMessage, setSubmissionMessage] = useState('');


    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${serverUrl}/submit-form`, { // Use the serverUrl here
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                setSubmissionMessage('Form submitted successfully!'); // Set the success message
                reset(); // Clear the form fields
            } else {
                console.error('Error submitting form');
                setSubmissionMessage('Error submitting form. Please try again.'); // Set the error message
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionMessage('An error occurred. Please try again later.'); // Set a generic error message
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
