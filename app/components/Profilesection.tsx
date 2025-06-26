"use client";

import Image from "next/image";
import styles from "../profile/page.module.css";
import { motion } from "framer-motion";

export default function ProfileSection() {
  return (
    <section id="profile" className={styles.profileMain}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className={styles.imageWrapper}>
          <Image
            src="/images/profile.jpg"
            alt="My Photo"
            width={250}
            height={250}
            className={styles.image}
            priority
          />
        </div>

        <div className={styles.textWrapper}>
          <h2 className={styles.title}>Profile</h2>
          <div className={styles.paragraph}>
            <p>
              <strong>名前：</strong>WAI LIN AUNG
            </p>
            <br />
            <p>
              <strong>年齢：</strong>27歳
            </p>
            <br />
            <p>
              <strong>趣味：</strong>読書、旅行、写真撮影
            </p>
            <br />
            <p className={styles.college}>
              専門学校沖縄ビジネス外語学院 Web
              プログラミングコースを専攻し、現在はエンジニアを目指して勉強中。
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
