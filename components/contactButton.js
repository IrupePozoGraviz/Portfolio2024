"use client"
import { useForm, ValidationError } from "@formspree/react";
import style from '@/styles/footer.module.css';
import styles from '@/styles/button.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mayrawly");

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={style.ContactForm} aria-label="Contact Form">
      <h3>Hey let's connect</h3>
      <div className={style.email}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" aria-required="true" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className={style.message}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" aria-required="true"></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button className={styles.ContactButton} type="submit" disabled={state.submitting} aria-disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}