import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/modalForm.css';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xxxxx');
  
  if (state.succeeded) {
    return <p className="message">Tack för ditt meddelande! Vi kommer att kontakta dig snart.</p>;
  }

  return (
    <div className="webbForm">
      <form onSubmit={handleSubmit} className="enkelForm">
        <div className="kontaktSektion">
          <label htmlFor="namn">Namn:</label>
          <input type="text" id="namn" name="namn" />
          <ValidationError prefix="Namn" field="namn" errors={state.errors} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="telefon">Telefon:</label>
          <input type="tel" id="telefon" name="telefon" />
          <ValidationError prefix="Telefon" field="telefon" errors={state.errors} />
        </div>

        <fieldset className="paketSektion">
          <legend>Välj Paket:</legend>
          <label htmlFor="paket1">
            <input type="checkbox" name="paket" value="paket1" id="paket1" />
            Paket1
          </label>
          <label htmlFor="paket2">
            <input type="checkbox" name="paket" value="paket2" id="paket2" />
            Paket2
          </label>
          <label htmlFor="paket3">
            <input type="checkbox" name="paket" value="paket3" id="paket3" />
            Paket3
          </label>
        </fieldset>

        <div className="övrigtSektion">
          <label htmlFor="ovrigt">
            <h2>Övriga frågor eller kommentarer:</h2>
            <textarea id="ovrigt" name="ovrigt" />
          </label>
          <ValidationError prefix="Kommentar" field="ovrigt" errors={state.errors} />
        </div>

        <button className="sendBtn" type="submit" disabled={state.submitting}>Skicka</button>
      </form>
    </div>
  );
};

export default ContactForm;
