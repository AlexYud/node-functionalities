const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,  // TLS requires secureConnection to be false
  auth: {
    user: "email.1@outlook.com",
    pass: ""
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

transporter.sendMail({
  from: "Email 1 <email.1@outlook.com>",
  to: "email.2@gmail.com",
  subject: "Sending message through nodemailer",
  text: "Hello, my name is **** and I'm just testing the lib nodemailer...",
  html: "To know how, <a href='https://github.com/AlexYud/node-functionalities/tree/master/sendEMail'> click here</a>!"
}).then(message => {
  console.log(message);
}).catch(err => {
  console.log(err);
});