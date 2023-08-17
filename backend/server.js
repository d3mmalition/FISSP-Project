const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

// Import the mailer module
const { sendEmail } = require('./mailer'); // Adjust the path accordingly

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await sendEmail(name, email, message);
        console.log('Email sent successfully');
        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Error sending email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
