import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { useState } from "react";

function ContactForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [text, setText] = useState("")


  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHART"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneVolume fontSize="20px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<CgMail fontSize="22px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.from_container}>
            <lable htmlFor="name">Name</lable>
            <input type="text" name="name" />
          </div>
          <div className={styles.from_container}>
            <lable htmlFor="email">Email</lable>
            <input type="email" name="email" />
          </div>
          <div className={styles.from_container}>
            <lable htmlFor="text">Text</lable>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>
          <div>
            {
              name + " " + email + " " + text
            }
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" />
      </div>
    </section>
  );
}

export default ContactForm;
