import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xvgaqzng");

  // 1. Define ALL variables and styles at the TOP
  const inputBaseClasses = `
    peer relative z-10 w-full rounded-xl border-4 p-4 pt-7 text-sm transition-all duration-300
    focus:outline-none focus:ring-0 text-heading-1
    hover:cursor-pointer bg-box-bg border-box-border
    border-gray-200 text-black hover:border-blue-400
    dark:border-gray-700 dark:text-white dark:hover:border-purple-500
  `;

  const labelBaseClasses = `
    absolute left-4 top-2 z-20 font-bold uppercase tracking-widest text-[10px]
    gradient-text bg-clip-text text-transparent
    pointer-events-none transition-all duration-300
  `;

  // 2. Handle the "Success" return
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center p-10 text-center bg-service-card-bg rounded-2xl border border-white/10 shadow-xl animate-in fade-in zoom-in duration-300">
        <div className="text-5xl mb-4">🚀</div>
        <h3 className="text-2xl font-bold text-heading-1 mb-2">Thanks for reaching out!</h3>
        <p className="text-heading-1 mb-6">I've received your message and will get back to you shortly.</p>
        <button 
          onClick={reset} 
          className="text-sm text-heading-1 hover:text-blue-300 transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  // 3. Handle the "Default" return
  return (
    <section id="contact" className="relative z-0 scroll-mt-24 flex justify-center p-8">
      <div className="w-full max-w-3xl rounded-xl bg-transparent p-4">
        <div className="relative flex flex-col items-center justify-center gap-8">
          <Title>
            <span className="gradient-text bg-clip-text text-transparent">Contact Me</span>
          </Title>
          <p className="text-lg mb-10 text-heading-1 text-center">Let's build something together!</p>
        </div>

        <div className="w-full max-w-xl mx-auto">
          <form className="relative w-full scroll-mt-32" onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-6">
              
              {/* Name Input */}
              <div className="relative inline-flex h-16 items-center justify-center w-full">
                <input 
                  className={inputBaseClasses}
                  id="name"
                  name="name"
                  placeholder=" "
                  required
                  type="text"
                />
                <label htmlFor="name" className={labelBaseClasses}>Your Name</label>
              </div>

              {/* Email Input */}
              <div className="relative inline-flex h-16 w-full items-center justify-center">
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={inputBaseClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor="email" className={labelBaseClasses}>Email Address</label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              {/* Message Input */}
              <div className="relative inline-flex w-full items-center justify-center">
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className={inputBaseClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor="message" className={labelBaseClasses}>What can I help with?</label>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <div className="relative mt-4 flex justify-center">
                <div className="bg-white text-black rounded-full group/button inline-block transition duration-300 ease-in-out hover:scale-105">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-400 to-blue-600 text-white disabled:opacity-50"
                  >
                    {state.submitting ? "Sending..." : "Submit"}
                  </button>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;