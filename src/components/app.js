const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/', function (req, res) {
//     res.render('index');
// });

app.post('/send-email', function (req, res) {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ShadowGaming902@gmail.com',
        pass: 'b0LvR7JA!vBD'
      }
    });
  
    var mailOptions = {
      from: 'ShadowGaming902@gmail.com',
      to: 'ShadowGaming902@gmail.com',
      subject: req.body.subject,
      text: ('email: ' + req.body.email + '\n' + req.body.message)
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });

  app.listen(port, function() {
    console.log('Server is running at port: ',port);
  });