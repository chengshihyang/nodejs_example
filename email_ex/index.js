"use strict";

var nodeMailer = require('nodemailer');

var user = 'recardo.cheng@gmail.com',
		pass = 'xxxxxxxxxx';

var transporter = nodeMailer.createTransport({
		    host: 'smtp.gmail.com', 
		    secureConnection: true,
		    port: 465,
		    auth: {
          user: user,
	        pass: pass
	      }
});


transporter.sendMail({
		    from: 'recardo.cheng@gmail.com',
		    to: 'r@iiot.io',
		    subject: 'Node js通过smtp协议从qq邮箱发送邮件',
		    html: '这是一封测试邮件 <br>'
}, function (err, res) {
		if (err) {
				console.log(err);
		}
		else {
		  console.log(res);
		}
});
