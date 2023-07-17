import React, { useState } from 'react';
import '../../App.css';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        // You can use the form data (name, email, message) for further processing
        // For example, send an email or store the form data in a database
        console.log('Form submitted:', { name, email, message });
        // Reset the form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    );
}

export default ContactForm;