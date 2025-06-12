"use client";

import { motion } from "framer-motion";
import styles from "../skill/page.module.css";

export default function SkillSection() {
  return (
    <section id="skill" className={styles.skillMain}>
      <div className={styles.overlay}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.title}>My Skills</h2>
          <ul className={styles.skillList}>
            <li>HTML / CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React / Next.js</li>
            <li>Node.js / Express</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
