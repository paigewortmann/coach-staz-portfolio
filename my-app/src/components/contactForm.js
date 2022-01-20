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
        <div className='box'>
            <h1 className='formTitle'>Send an Email</h1>
            <form onSubmit={sendEmail} className='form'>
                <section className='input-fields'>
                    <div>
                        <input type="text" name="name" placeholder='Your Name' className='field'/>
                    </div>

                    <div>
                        <input type="email" name="email" placeholder='Your Email' className='field'/>
                    </div>

                    <div>
                        <input type="email" name="subject" placeholder='Email Subject' className='field'/>
                    </div>

                    <div>
                        <textarea name="message" placeholder='Your Message' className='field'/>
                    </div>

                </section>

                <input type="submit" value="Send" />
            </form>
        </div>

    );
}

export default contactForm;