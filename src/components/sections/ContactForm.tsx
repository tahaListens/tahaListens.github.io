import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "../shared/Container";
import { Title } from "../shared/Title";

export const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("xvgaqzng");
  if (state.succeeded) {
    return <div>Thanks for reaching out! </div>;
  }

  return (
    <section
      id="contact"
      className="relative z-0 scroll-mt-24 relative z-[500] flex 
          justify-center p-8 l:scroll-mt-24 l:px-0 l:pb-24 l:pt-8"
    >
      <div
        className=" w-full max-w-3xl rounded-xl border border-white bg-body-bg 
                      p-4 py-8 l:mx-auto l:max-w-[50rem] l:p-16 bg-body-bg"
      >
        <div className="relative flex flex-col items-center justify-center gap-8 l:gap-16">
          <Title>
            {" "}
            <span className="!bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent">
              Contact Me
            </span>
          </Title>
          <p className="text-lg mb-10 text-white justify-center text-center">
            I would love to hear from you! Please fill out the form below and I
            will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full max-w-xl mx-auto ">
          <form
            className="relative w-full scroll-mt-32"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-col gap-6 transition duration-300 ease-in-out l:grid l:grid-cols-2">
              {/* Your Name */}
              <div className="contents active-cursor relative rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-1.5">
                <div className="relative inline-flex h-16 w-full items-center justify-center rounded-lg transition duration-300 ease-in-out border ring-blue hover:ring-2">
                  <input
                    className="relative  z-10 w-full scroll-mt-32 !border-none bg-transparent pt-7 p-4 text-sm font-normal focus:ring-0 l:pr-4 l:text-sm text-white"
                    placeholder=" "
                    required
                    type="text"
                  />
                  <label
                    className="filled-text-fade absolute left-0 top-0 z-0 scroll-mt-32 pl-3 pt-1 font-sohne text-sm font-bold uppercase tracking-widest transition duration-300 ease-in-out
                   text-heading-1 !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent"
                  >
                    Your Name
                  </label>
                </div>
              </div>
              {/* Email */}
              <div className="contents active-cursor relative rounded-xl bg-gradient-to-r from-pink via-yellow to-blue p-1.5">
                <div
                  className="relative inline-flex h-16 w-full items-center justify-center rounded-lg transition duration-300 ease-in-out 
                              border ring-blue hover:ring-2"
                >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="relative  z-10 w-full scroll-mt-32 !border-none bg-transparent p-4 pr-4 pt-7 text-sm 
                    font-normal focus:ring-0 l:pr-4 l:text-sm text-white align-bottom"
                    placeholder=""
                  />
                  <label
                    htmlFor="email"
                    className="filled-text-fade absolute left-0 top-0 z-0 scroll-mt-32 pl-3 pt-2 font-sohne text-sm font-bold uppercase tracking-widest transition duration-300 ease-in-out text-white 
                      !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent"
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
                <div className="relative inline-flex h-full w-full items-center justify-center rounded-lg transition duration-300 ease-in border border-gray-900 bg-gray-1100">
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    className="w-full px-4 py-8 rounded-md border text-sm
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                    hover:cursor-pointer hover:border-gray-400
                    transition duration-200 text-white"
                  />
                  <label
                    className="filled-text-fade absolute left-3 top-3 z-10 scroll-mt-32 font-sohne text-8pt font-bold uppercase tracking-widest transition duration-300 ease-in-out text-sm
                       text-white !bg-gradient-to-r !from-purple-300 !to-blue-600 !bg-clip-text !text-transparent"
                  >
                    What's on your mind?
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
                  <div className="bg-white text-black squircle group/button inline-block border-px border-transparent transition duration-300 ease-in-out hover:scale-105 cursor-pointer">
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="px-6 py-3 rounded-md font-semibold transition duration-200 hover:shadow-lg disabled:opacity-50"
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
