import React, { useState } from 'react';
import axios from 'axios';
import { validateEmail } from '../utils/helpers';


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateEmail(email)) {
          setErrorMessage('Email is invalid');
          return;
        }

        try{
            const response = await axios.post('/send-email', {
                name, 
                email,
                message,
            });

            console.log(response.data);

            setName('');
            setEmail('');
            setMessage('');
            setErrorMessage('');

        } catch (error) {
            console.log(error);
        }
    };


    return(
        <section id="contact">
            <h2 className="page-title">Contact</h2>
            <section className="contact-form">
              <p>Contact form is under construction, to contact by email please use the mail icon in the footer of the page.</p>
            <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit">Submit</button>
        </form>
            </section>
        </section>


    )
}

export default ContactForm;