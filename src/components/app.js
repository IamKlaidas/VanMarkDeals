const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios').default;

var app = express();
var port = 3000;

// axios.get('/send-email')
//      .then(function (response) {
//         console.log("test");
//     })
//      .catch(function (error) {
//     // handle error
//         console.log(error);
//     })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
// })


// app.get('/', function (req, res) {
//     res.render('index');
// });

app.post('/send-email', function (req, res) {
    console.log(req)
    // var transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'ShadowGaming902@gmail.com',
    //     pass: 'b0LvR7JA!vBD'
    //   }
    // });
  
    // var mailOptions = {
    //   from: 'ShadowGaming902@gmail.com',
    //   to: 'ShadowGaming902@gmail.com',
    //   subject: req.body.subject,
    //   text: ('email: ' + req.body.email + '\n' + req.body.message)
    // };
  
    // transporter.sendMail(mailOptions, function(error, info){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Email sent: ' + info.response);
    //   }
    // });
  });

  app.listen(port, function() {
    console.log('Server is running at port: ',port);
  });