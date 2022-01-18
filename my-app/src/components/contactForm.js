import React from 'react';
import emailjs from 'emailjs-com';
import '../componentStyles/contactFormStyle.css'

const SERVICE_ID = 'service_r2iquic';
const TEMPLATE_ID = 'template_he33sse';
const USER_ID = 'user_jMuVnHZJWTW3FeHXVwn37';

function contactForm() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                alert('Thanks! Message was sent succesfully.')
            }, (error) => {
                console.log(error.text);
                alert('Something went wrong...')
            });
        e.target.reset()
    };

    return (
        <div>
            <h1 className='formTitle'>Send an Email</h1>
            <form onSubmit={sendEmail} className='form'>
                <label>Name</label>
                <input type="text" name="name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="email" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>

    );
}

export default contactForm;