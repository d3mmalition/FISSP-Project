const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
    host: Gmail, // Replace with your SMTP server details
    port: 465, // Replace with your SMTP port
    secure: true, // Use SSL
    auth: {
        user: process.env.REACT_APP_EMAIL_USERNAME,
        pass: process.env.REACT_APP_EMAIL_PASSWORD
    }
});

// Export a function to send emails
exports.sendEmail = async (recipient, subject, message) => {
    try {
        const mailOptions = {
            from: process.env.REACT_APP_EMAIL_USERNAME, // Sender's email
            to: recipient, // Recipient's email
            subject: subject,
            text: message
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, message: 'Error sending email' };
    }
};
