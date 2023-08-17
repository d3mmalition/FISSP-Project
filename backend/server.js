// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.REACT_APP_EMAIL_USERNAME,
        pass: process.env.REACT_APP_EMAIL_PASSWORD
    }
});

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email
        to: 'ecarr.gardner@gmail.com', // Your email address to receive the form
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
