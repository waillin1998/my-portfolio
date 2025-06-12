"use client";

import { useState, FormEvent } from "react";
import styles from "./Contactsection.module.css";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you could also grab the values:
    // const data = new FormData(e.currentTarget);
    // console.log("Name:", data.get("name"), "Email:", data.get("email"));

    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contactMain}>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {!submitted ? (
          <>
            <h2 className={styles.title}>Contact Me</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={styles.input}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={styles.input}
                  placeholder="Your email"
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={styles.textarea}
                  placeholder="Your message"
                  required
                />
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send
              </button>
            </form>
          </>
        ) : (
          <div className={styles.thanks}>
            <h2>Thank you!</h2>
            <p>
              Your message has been received. I&rsquo;ll get back to you soon.
            </p>
          </div>
        )}
      </motion.div>
    </section>
  );
}
