const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
	auth: {
		api_key: '9f3d69874fd0e6d9100f6e4b7b71ce82-07bc7b05-22059f95',
		domain: 'sandboxb42eaad61e114a54b807c44d09ca7e40.mailgun.org'
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (subject, text, cb) => {
    const mailOptions = {
        from: 'vrajani103@gmail.com',
        to: 'vaibhav.rajanivit@gmail.com', 
        subject,
		text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}


module.exports = sendMail;