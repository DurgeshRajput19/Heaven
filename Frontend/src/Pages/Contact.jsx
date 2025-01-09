import React from "react";
import Footer from "../Components/Footer";
import {
  FaEnvelope,
  FaHeadphones,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Title from "../Components/Title";

const Contact = () => {
  return (
    <section className="max-padd-container mt-24">
      <div className="flex flex-col xl:flex-row gap-20 py-6">
        <div>
          <Title title1={"Get"} title2={" in Touch"} titleStyles={"h3"} />
          <p className="mb-5 max-w-xl">
            Have questions or need help? send us a message, and we'll get back
            to you as soon as possible.
          </p>
          <form action="">
            <div>
              <div>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 py-2 px-3 border-none ring-1 ring-slate-900/5 regular-14 rounded"
                  placeholder=" Enter Your Name"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full mt-1 py-2 px-3 border-none ring-1 ring-slate-900/5 regular-14 rounded"
                />
              </div>
            </div>
            <div>
              <textarea
                name=""
                id="message"
                placeholder="Write Your Message Here"
                className="w-full mt-1 py-2 px-3 border-none ring-1 ring-slate-900/5 regular-14 rounded resize-none"
              ></textarea>
            </div>
            <button type="submit" className="btn-dark rounded shadow-sm">
              Send Message
            </button>
          </form>
        </div>

        <div>
          <Title title1={"Contact"} title2={" Details"} titleStyles={"h3"} />
          <p className="max-w-xl mb-4">
            We are always here to assists you ! Feel free to reach out through
            any of following methods
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">Location :</h5>
              <p className="flexStart gap-x-2">
                <FaLocationDot /> 123 Flavour Street , Food City , FC 12345
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4 ">email : </h5>
              <p className="flexStart gap-x-2">
                <FaEnvelope /> infoflavourheaven@gmail.com
              </p>
            </div>
            <div className="flex flex-col">
              <h5 className="h5 capitalize mr-4">Phone:</h5>
              <p className="flexStart gap-x-2">
                <FaPhone />
                +91 (800) 123-4567
              </p>
            </div>
            <div>
              <h5 className="h5 capitalize mr-4">Support :</h5>
              <p className="flexStart gap-x-2">
                <FaHeadphones />
                24/7 Support is open
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Title title1={"Find"} title2={"us Here"} titleStyles={"h3"} />
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4549.502646084798!2d77.25783550037626!3d28.771695908044244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1735662020182!5m2!1sen!2sin"
            className="w-full h-full"
            frameborder="0"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
