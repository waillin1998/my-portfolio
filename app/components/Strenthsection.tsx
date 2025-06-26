"use client";

import { motion } from "framer-motion";
import styles from "../strengths/page.module.css";

export default function StrengthSection() {
  return (
    <section id="strengths" className={styles.strengthSection}>
      <motion.div
        className={styles.textWrapper}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>My Strengths</h2>

        <ul className={styles.list}>
          <li>
            <strong>JLPT N2 合格</strong>
            <br />
            日常会話がわかり、日本語の記事も自信をもって読むことができます。
          </li>
          <li>
            <strong>英語コミュニケーション</strong>
            <br />
            英語で話すことも書くことも、問題なくできます。
          </li>
          <li>
            <strong>聞く力</strong>
            <br />
            人の話をよく聞いて、相手の気持ちや必要なことを理解するのが得意です。
          </li>
          <li>
            <strong>好奇心と独学</strong>
            <br />
            わからないことがあると、しっかり調べます。新しい技術を学ぶのが好きです。
          </li>
          <li>
            <strong>論理的思考</strong>
            <br />
            パズルやコーディングの問題を一つずつ考えて解くのが好きです。
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
