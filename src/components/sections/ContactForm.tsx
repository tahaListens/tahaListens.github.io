import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xvgaqzng");
  if (state.succeeded) {
    return <div>Thanks for reaching out! </div>;
  }
  return (
    <section id="contact">
      <div className="relative flex flex-col items-center justify-center py-20 bg-body-bg">
        <form className="text-heading-3 bg-white" onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
