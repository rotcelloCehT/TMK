import React from "react";
import { StyledContactForm } from "./ContactForm.Styled";

const ContactForm = () => {
  return (
    // <StyledContactForm>
    <form name="contact" method="post" data-netlify-recaptcha="true" data-netlify="true">
    <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">Name</label> <br />
        <input type="text" id="name" name="name" required />
      </p>
      <p>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message</label> <br />
        <textarea id="message" name="message" required></textarea>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <input type="submit" value="Submit message" />
      </p>
    </form>
    // </StyledContactForm>
  );
};

export default ContactForm;