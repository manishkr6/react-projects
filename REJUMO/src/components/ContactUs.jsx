import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { FaLocationDot } from "react-icons/fa6";
import { MdAccessTimeFilled, MdWifiCalling, MdMail } from "react-icons/md";

const ContactUs = () => {
  return (
    <ContactContainer>
      <div className="navigation">
        <Navigation />
      </div>
      <div className="contact-page">
        <div className="header">
          <h1>Contact Us</h1>
          <p>
            Let us know how we can assist you. Fill out the form below or visit
            us during our business hours.
          </p>
        </div>

        <div className="contact-us">
          <div className="location">
            <div className="place">
              <FaLocationDot />
              <p>below paljor stadium, gnagtok ,skikim</p>
            </div>
            <div className="time">
              <MdAccessTimeFilled />
              <p>Mon-Fri 10am-5pm, Sat 1pm-5pm</p>
            </div>
            <div className="number">
              <MdWifiCalling />
              <a href="tel:8927436941">8927436941</a>

            </div>
            <div className="email">
              <MdMail />
              <a href="mailto:manish.kr5487480@gmail.com">
                manish.kr5487480@gmail.com
              </a>
            </div>
          </div>
          <div className="map-location">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d10664.750782665156!2d88.60692892529346!3d27.33605236051411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1738155786873!5m2!1sen!2sin"
              width="400"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <form className="form" action="">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message"></textarea>
              <div className="button">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </ContactContainer>
  );
};

export default ContactUs;

const ContactContainer = styled.div`
  .contact-page {
    padding-top: 1rem;
    background-color: #1c1c1c;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
  }

  .place,
  .time,
  .number,
  .email {
    display: flex;
    align-items: center;
    gap: 01rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }

  .number {
    margin-top: 13px;

  }

  .email {
    padding-top: 23px;
  }

  .email a, .number a {
    text-decoration: none;
    color: white;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 2rem;
  }

  .header p {
    color: #cec4c4;
  }

  .location {
    height: 1rem;
    padding-bottom: 17rem;
  }

  .contact-us {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    flex-direction: row-reverse;
  }

  input::placeholder {
    color:rgb(95, 94, 94);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 1px;
    padding: 6px;
  }

  textarea::placeholder {
    color: rgb(95, 94, 94);;
    font-size: 1.1rem;
    letter-spacing: 1px;
    padding: 7px;
    /* padding-top: 2px; */
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form input {
    width: 20rem;
    height: 1.8rem;
    background-color: #1c1c1c;
    border-radius: 3px;
    border: 1px solid white;
    color: whitesmoke;
  }


  .form textarea {
    background-color: #1c1c1c;
    border-radius: 3px;
    border: 1px solid white;
    color: whitesmoke;
    width: 20.4rem;
    height: 100px;
    resize: none;
  }

  textarea {
    margin-top: 5px;
  }

  button {
    margin-top: 0.8rem;
    background-color: rgb(67, 67, 237);
    height: 3rem;
    width: 9rem;
    color: whitesmoke;
    font-size: 15px;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    font-weight: 700;
    border: 1px solid whitesmoke;
  }

  button:hover {
    background-color: #5555f1;
  }

  iframe {
    height: 16rem;
  }
`;
