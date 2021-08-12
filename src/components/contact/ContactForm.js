import React from "react";
import { StyledContactForm } from "./ContactForm.Styled";
import  tmkLogoWhite  from '../../images/tmklogowhite.svg';
import rulerYellow from '../../images/ruleryellow.svg';
import sendIcon from '../../images/sendIcon.svg';

const ContactForm = () => {
  return (
    <StyledContactForm>
      <div className="form-header">
        <img src={tmkLogoWhite} alt="TMK logo" />
        <p>Let's Get Started</p>
        <img className="ruler" src={ rulerYellow } alt="ruler decoration" />
      </div>

      <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-field">
          <label htmlFor="name">Name:</label> 
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email:</label> 
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div className="form-field">
          <button type="submit">
            <p>Submit</p>
            <img src={ sendIcon } alt="submit" />
          </button>
        </div>
      </form>
    </StyledContactForm>
  );
};

export default ContactForm;