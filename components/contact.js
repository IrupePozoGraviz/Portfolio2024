
'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/contact.module.css'; // Adjust this import path as necessary

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    };
    xhr.send(data);
  };

  return (
    <div>
      <section className={styles.contactContainer}>
        <h3>Time to talk</h3>
        <div className={styles.profileImgContainer}>
          <div className={styles.nameContainer}>
            <h1>Irupé Pozo Graviz</h1>
            <h2>Frontend developer</h2>
          </div>
        </div>
        <div className={styles.infoContainer}>
          {!isSubmitted ? (
            <form
              className={styles.form}
              action="https://formspree.io/f/mrgvvawb"
              method="POST"
              onSubmit={handleSubmit}>
              <div className={styles.mail}>
                <label htmlFor="email"> <p>Your email:</p></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required />
              </div>
              <div className={styles.textarea}>
                <label htmlFor="message"> <p>Message:</p></label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Write your message here"
                  required />
              </div>
              <button className={styles.buttonSend} type="submit">Send</button>
            </form>
          ) : (
            <p>Message sent successfully!</p>
          )}
        </div>
        <div className={styles.icons}>
          <div className={styles.iconsgithub}>
            <a href="https://github.com/IrupePozoGraviz" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/blackgithubicon.svg" alt="GitHub" width={40} height={40} layout="fixed" />
            </a>
          </div>
          <div className={styles.iconslinkedin}>
            <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/" target="_blank" rel="noopener noreferrer">
              <Image src="/assets/blacklinkedinicon.svg" alt="LinkedIn" width={40} height={40} layout="fixed" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
