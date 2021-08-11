import React from "react";
import { StyledContactForm } from "./ContactForm.Styled";

const ContactForm = () => {
  return (
    <StyledContactForm>
      <form name="contact" method="post" data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit">test</button>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;