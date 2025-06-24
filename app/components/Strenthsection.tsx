"use client";

import { motion } from "framer-motion";
import styles from "../strengths/page.module.css";

export default function StrengthSection() {
  return (
    <section id="strengths" className={styles.strengthSection}>
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>My Strengths</h2>

        <ul className={styles.list}>
          <li>
            <strong>JLPT N2 Certified</strong>
            <br />I can understand everyday conversation and read Japanese
            articles with confidence.
          </li>
          <li>
            <strong>English Communication</strong>
            <br />I can comfortably communicate in English — both writing and
            speaking.
          </li>
          <li>
            <strong>Listening Skills</strong>
            <br />
            I’m good at listening carefully to people and understanding their
            needs.
          </li>
          <li>
            <strong>Curiosity & Self-Learning</strong>
            <br />I always research topics deeply when I don’t understand
            something. I enjoy learning new tech!
          </li>
          <li>
            <strong>Logical Thinking</strong>
            <br />I enjoy puzzles, coding challenges, and solving problems
            step-by-step.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
