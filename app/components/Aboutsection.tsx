"use client";

import styles from "../about/page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Aboutsection() {
  return (
    <section id="about" className={styles.aboutMain}>
      <div className={styles.overlay}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <Image
            src="/images/me.jpg"
            alt="My Photo"
            width={250}
            height={250}
            className={styles.image}
            priority
          /> */}
        </motion.div>

        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.text}>
            This is my personal portfolio site. Here, I share my growth as a
            developer, my learning journey, and the kind of projects I hope to
            build.
          </p>
          <p className={styles.text}>
            I&apos;m currently a student, but I love exploring new tech and
            thinking creatively. One step at a time, I&apos;m leveling up my
            skills and aiming for real-world impact!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
