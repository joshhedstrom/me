const path = require('path');
const nodeMailer = require('nodemailer');
require('dotenv').config();

module.exports = (app) => {
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })

    app.post('/contact', (req, res) => {
        let transporter = nodeMailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'jhedstrom256@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        });
        let mailOptions = {
            from: req.body.email,
            to: '"Josh Hedstrom" <josh.hedstrom@gmail.com>',
            subject: `Contact from: ${req.body.name} || ${req.body.number}`,
            text: `Name: ${req.body.name} \nEmail: ${req.body.email} \nPhone: ${req.body.number} \nMessage: ${req.body.message}`,
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });
    });
}