// import './App.css';
// import React from 'react';
// import contactForm from './components/contactForm';

// function App() {
//   return (
//     <main>
//       <div className="App">
//         <contactForm />
//       </div>
//     </main>
//   );
// }

// export default App;

import emailjs from 'emailjs-com';
import React from 'react';
// import 'semantic-ui-css/semantic.min.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'

const SERVICE_ID = "service_5z83g7h";
const TEMPLATE_ID = "user_jMuVnHZJWTW3FeHXVwn37";
const USER_ID = "user_jMuVnHZJWTW3FeHXVwn37";

const App = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)

            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: 'Uh Oh, something went wrong',
                    text: error.text,
                })
            });
        e.target.reset()
    };


    return (
        <div className="App">
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    id="form-email"
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Your Email'
                    required
                    icon='mail'
                    iconPosition='left'
                >
                </Form.Field>

                <Form.Field
                    id='form-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Your Name'
                    required
                    icon='user circle'
                    iconPosition='left'
                >

                </Form.Field>

                <Form.Field
                    id='form-message'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Your Message'
                    required
                >
                </Form.Field>

                <Button type='submit'> Submit </Button>

            </Form>
        </div>
    );
}

export default App;
