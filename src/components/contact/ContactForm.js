import React from "react";
import { StyledContactForm } from "./ContactForm.Styled";

const ContactForm = () => {
  return (
    < StyledContactForm 
      name="contact" 
      method="POST"
      data-netlify="true"
    >
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" required />
        </div>
        <button type="submit">test</button>
    </StyledContactForm>
  );
};

export default ContactForm;