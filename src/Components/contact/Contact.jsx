import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bef6uo6", "template_1z1v3us", ref.current, {
        publicKey: "5H0eHKu3cDcqxhe-U",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Don't be shy! Say hii! 👉</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Gmail</h2>
          <span>faizalkhan.tk@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Bank Colony ,Mandsaur</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 7869760778</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={ref} onSubmit={sendEmail}>
          <input type="text" required placeholder="name" name="name" />
          <input type="email" required placeholder="email" name="email" />
          <textarea rows={8} placeholder="message" name="message" />
          <button>Submit</button>
        </form>
        {error && "Error"}
        {success && "Success"}
      </div>
    </motion.div>
  );
};

export default Contact;
