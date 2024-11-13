// src/components/Contact.js

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./Contactsty.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r8trfm8', 'template_4x8b50r', form.current, {
        publicKey: 'V-fgKpshJJ8ru_ydX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("success")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Get in touch</h2>
        <span>
          <p><b>Email ID :</b></p>
          <p>kirtiraj2899@gmail.com</p>
        </span>
        <span>
          <p><b>Contact No. : :</b></p>
          <p>9359021581</p>
        </span>
        <span>
          <p><b>LinkedIn :</b></p>
          <p>www.linkedin.com/in/kirtiraj-kumbhar-853308247</p>
        </span>
      </div>
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label><br />
          <input type="text" name="user_name"  required /><br />
          <label>Email:</label><br />
          <input type="email" name="user_email"  required /><br />
          <label>Message:</label><br />
          <textarea name="message"  required /><br />
         
          <button value="Send">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
