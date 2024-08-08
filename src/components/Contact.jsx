import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const phone = form.current.user_phone.value.trim();
    const message = form.current.message.value.trim();

    // Name validation
    if (!name || name.length < 3) {
      toast.error("Name must be at least 3 characters long.");
      return;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/; // Adjust as needed (e.g., 10 digits)
    if (!phone || !phonePattern.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    // Message validation
    if (!message) {
      toast.error("Message cannot be empty.");
      return;
    }

    emailjs
      .sendForm("service_ct25cnl", "template_jc3g0q1", form.current, {
        publicKey: "jdBzQPq2gPMDts_f0",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again later.");
          console.error("Email sending error:", error.text);
        }
      );
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4"
            >
              Let's Talk
            </h3>
            <p>
              I'm available to discuss web development projects and explore
              partnership opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:sadeekg133@gmail.com" className="hover:underline">
                sadeekg133@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+977 9861546865</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>Godawari-13, Lalitpur, Bagmati, Nepal</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                  name="user_name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Your Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                  name="user_email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2">
                  Your Phone Number
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Phone Number"
                  name="user_phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  name="message"
                />
              </div>
              <input
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                type="submit"
                value="Send"
              />
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
