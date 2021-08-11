import React from "react";
// import { StyledContactForm } from "./ContactForm.Styled";

const ContactForm = () => {
  return (
    <form 
      name="contact v2"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      onSubmit="submit"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact v2" />

      <div hidden>
        <input name="bot-field" />
      </div>

      <div>
        <label>First name<br />
            <input type="text" name="first-name" />
        </label>
      </div>

      <div>
        <label>Last name<br />
            <input type="text" name="last-name" />
        </label>
      </div>

      <div>
        <label htmlFor="email" >Email</label><br />
        <input id="email" type="email" name="email" />
      </div>

      <div>
        <label>Any Comments?<br />
          <textarea name="comments"></textarea>
        </label>
      </div>
      
      <div data-netlify-recaptcha="true"></div>

      <button type="submit">Submit The Results</button>

    </form>
  );
};

export default ContactForm;