import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xvgaqzng");
  if (state.succeeded) {
    return <div>Thanks for reaching out! </div>;
  }

  const inputBaseClasses = `
    peer relative z-10 w-full rounded-xl border-4 p-4 pt-7 text-sm transition-all duration-300
    focus:outline-none focus:ring-0 text-heading-1
    hover:cursor-pointer bg-box-bg border-box-border
    /* Light Theme Styles */
    border-gray-200 text-black hover:border-blue-400
    /* Dark Theme Styles */
     dark:border-gray-700 dark:text-white dark:hover:border-purple-500
  `;

  const labelBaseClasses = `
    absolute left-4 top-2 z-20 font-bold uppercase tracking-widest text-[10px]
    gradient-text bg-clip-text text-transparent
    pointer-events-none transition-all duration-300
  `;

  return (
    <section id="contact" className="relative z-0 scroll-mt-24 relative  flex 
          justify-center p-8 ">
      <div className=" w-full max-w-3xl rounded-xl bg-transparent 
                      p-4">
        {/* Title */}
        <div className="relative flex flex-col items-center justify-center gap-8 l:gap-16">
          <Title>
            <span className="gradient-text bg-clip-text text-transparent">
              Contact Me </span>
          </Title>
          <p className="text-lg mb-10 text-heading-1
           justify-center text-center">
            Let's build something together! </p>
        </div>
        {/* Form */}
        <div className="w-full max-w-xl mx-auto ">
          <form
            className="relative w-full scroll-mt-32"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-col
             gap-6">
              {/* Your Name */}
              <div className="contents active-cursor relative inline-flex h-16 items-center justify-center">              
                  <input className={inputBaseClasses}
                          id="name"
                          name="name"
                          placeholder=" "
                          required
                          type="text"/>
                  <label className={labelBaseClasses}>
                    Your Name
                  </label>
              </div>
              {/* Email */}
              <div className="contents active-cursor relative rounded-xl p-1.5">
                <div
                  className="relative inline-flex h-16 w-full items-center justify-center rounded-lg transition duration-300 ease-in-out ">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className={inputBaseClasses}
                    placeholder=""
                  />
                  <label
                    htmlFor="email"
                    className={labelBaseClasses}
                  >
                    Email Address
                  </label>

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="contents active-cursor relative rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-1.5 col-span-2">
                <div className="relative inline-flex h-full w-full items-center justify-center rounded-lg transition duration-300 ease-in">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className={inputBaseClasses}
                  />

                  <label
                    className={labelBaseClasses}
                  >
                    What can I help with?
                  </label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>
              <div className="relative mt-4 block w-full l:mt-8">
                <div className="relative inset-0 z-10 flex h-full w-full items-center justify-center p-8">
                  <div className="bg-white text-black rounded-full   group/button inline-block border-px border-transparent transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-purple-400 to-blue-600 transition duration-200 hover:shadow-sm hover:shadow-purple-500 disabled:opacity-50"
                    >            
                      Submit
                    </button>
                  </div>
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

