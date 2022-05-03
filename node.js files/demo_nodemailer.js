var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'saturn.rochesterschools.org',
  port: 25,
  //secure: false, // use SSL
  auth: {
    user: '1019654',
    pass: 'home2120'
  },
  tls: {
    rejectUnauthorized: false
  }
});

var mailOptions = {
  from: '1019654@isd535.org',
  to: 'jobartucz@isd535.org',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});