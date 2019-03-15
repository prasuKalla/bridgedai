"use strict";

const nodemailer = require("nodemailer");

function sendMail(req, res){

    let transporter = nodemailer.createTransport({
        host: "smtp.elasticemail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'ck@bridged-email.com',
            pass: '89bf10eb-87d0-44e9-804a-472ce763082a'
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    var message = '<html><p>'+req.body.MMERGE3+'<p><br><p>EMAIL: '+req.body.EMAIL+' </p></html>'


    let mailOptions = {
        from: '"Chris Kennedy" <ck@bridged-email.com>',
        to: "ck@bridged-email.com",
        subject: "Hello ✔",
        html: message
    };

      transporter.sendMail(mailOptions);

    res.redirect('/contactFull.html');

}


module.exports = {
   sendMail: sendMail
};