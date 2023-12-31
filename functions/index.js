const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: functions.config().email.username,
        pass: functions.config().email.password
    }
});

exports.submitForm = functions.https.onRequest(async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: functions.config().email.username,
        to: functions.config().email.username,
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});
