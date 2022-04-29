var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1019654@isd535.org',
    pass: 'Something2021!'
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