/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
  require('dotenv').config({ path: `${__dirname}/../../constants/.env` });

  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    },
    secure: true, // Set to true if your SMTP server requires SSL/TLS (often port 465)
  });

  const mailData = {
    from: process.env.SENDER,
    to: process.env.TO,
    subject: `Message From Portfolio Website`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<p>Name: ${req.body.name}</p>
           <p>Email: ${req.body.email}</p>
           <p>Phone: ${req.body.phone}</p>
           <p>Message: ${req.body.message}</p>`
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log('Error:', err);
      return res.status(500).json({ error: 'Failed to send message' });
    }
    console.log('Email sent:', info);
    return res.status(200).json({ success: 'Message sent successfully' });
  });
}
