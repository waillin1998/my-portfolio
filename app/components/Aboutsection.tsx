"use client";

import styles from "../about/page.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Aboutsection() {
  return (
    <section id="about" className={styles.aboutMain}>
      {/* <div className={styles.overlay}> */}
      {/* <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        > */}
      {/* <Image
            src="/images/me.jpg"
            alt="My Photo"
            width={250}
            height={250}
            className={styles.image}
            priority
          /> */}
      {/* </motion.div> */}

      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>
          こちらは私のポートフォリオサイトです。開発者としての成長や学習の過程、そしてこれから取り組みたいプロジェクトについて紹介しています。
        </p>
        <p className={styles.text}>
          現在は学生ですが、新しい技術を探求したり、創造的に考えることが大好きです。一歩一歩スキルを高めながら、現実の世界にインパクトを与えられるよう努力しています。
        </p>
      </motion.div>
      {/* </div> */}
    </section>
  );
}
