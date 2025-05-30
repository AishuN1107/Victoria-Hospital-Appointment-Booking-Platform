const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, html, bcc = null) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Victoria Hospital" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
    ...(bcc && { bcc }) 
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
