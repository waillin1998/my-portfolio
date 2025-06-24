// "use client";

// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// // Import icons
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
//   FaJava,
//   FaGithub,
// } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiExpress } from "react-icons/si";

// export default function SkillSection() {
//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             <li>
//               <FaHtml5 color="#e44d26" /> HTML
//             </li>
//             <li>
//               <FaCss3Alt color="#264de4" /> CSS
//             </li>
//             <li>
//               <FaJsSquare color="#f7df1e" /> JavaScript (ES6+)
//             </li>
//             <li>
//               <SiTypescript color="#007acc" /> TypeScript
//             </li>
//             <li>
//               <FaReact color="#61dafb" /> React
//             </li>
//             <li>
//               <SiNextdotjs color="#fff" /> Next.js
//             </li>
//             {/* <li>
//               <FaNodeJs color="#3c873a" /> Node.js
//             </li> */}
//             {/* <li>
//               <SiExpress color="#fff" /> Express
//             </li> */}
//             <li>
//               <FaJava color="#f89820" /> Java
//             </li>
//             <li>
//               <FaGithub color="#fff" /> GitHub
//             </li>
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // "use client";

// // import { useEffect, useState } from "react";
// // import { client } from "../../_libs/microcms";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import styles from "../skill/page.module.css";

// // type Skill = {
// //   id: string;
// //   title: string;
// //   icon: {
// //     url: string;
// //     height: number;
// //     width: number;
// //   };
// // };

// // export default function SkillSection() {
// //   const [skills, setSkills] = useState<Skill[]>([]);

// //   useEffect(() => {
// //     async function fetchSkills() {
// //       const data = await client.get({ endpoint: "skills" });
// //       setSkills(data.contents);
// //     }
// //     fetchSkills();
// //   }, []);

// //   return (
// //     <section id="skill" className={styles.skillMain}>
// //       <div className={styles.overlay}>
// //         <motion.div
// //           className={styles.content}
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className={styles.title}>My Skills</h2>
// //           <ul className={styles.skillList}>
// //             {skills.map((skill) => (
// //               <li key={skill.id}>
// //                 <Image
// //                   src={skill.icon.url}
// //                   alt={skill.title}
// //                   width={40}
// //                   height={40}
// //                 />
// //                 <p>{skill.title}</p>
// //               </li>
// //             ))}
// //           </ul>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../../_libs/microcms";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// type Skill = {
//   id: string;
//   title: string;
//   icon: {
//     url: string;
//     height: number;
//     width: number;
//   };
// };

// export default function SkillSection() {
//   const [skills, setSkills] = useState<Skill[]>([]);

//   useEffect(() => {
//     async function fetchSkills() {
//       const data = await client.get({ endpoint: "skills" });
//       setSkills(data.contents);
//     }
//     fetchSkills();
//   }, []);

//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             {skills.map((skill) => (
//               <li key={skill.id}>
//                 <Image
//                   src={skill.icon.url}
//                   alt={skill.title}
//                   width={40}
//                   height={40}
//                 />
//                 <p>{skill.title}</p>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../../_libs/microcms";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// type Skill = {
//   id: string;
//   title: string;
//   icon?: { url: string; width: number; height: number };
// };

// export default function SkillSection() {
//   const [skills, setSkills] = useState<Skill[]>([]);

//   useEffect(() => {
//     async function fetchSkills() {
//       try {
//         const data = await client.get<{ contents: Skill[] }>({
//           endpoint: "skills",
//         });
//         if (Array.isArray(data.contents)) {
//           // Optional: log missing icons
//           data.contents.forEach((s) => {
//             if (!s.icon || !s.icon.url) {
//               console.warn(`Skill "${s.title}" is missing an icon!`);
//             }
//           });
//           setSkills(data.contents);
//         }
//       } catch (err) {
//         console.error("Failed to fetch skills from microCMS:", err);
//       }
//     }
//     fetchSkills();
//   }, []);

//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             {skills.map((skill) => (
//               <li key={skill.id} className={styles.skillItem}>
//                 {skill.icon?.url ? (
//                   <Image
//                     src={skill.icon.url}
//                     alt={skill.title}
//                     width={skill.icon.width}
//                     height={skill.icon.height}
//                   />
//                 ) : (
//                   // Fallback: simple bullet or placeholder
//                   <span className={styles.fallbackIcon}>•</span>
//                 )}
//                 <p>{skill.title}</p>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// app/components/SkillSection.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../../_libs/microcms";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// type CMSSkill = {
//   id: string;
//   skillname: string;
//   image?: { url: string; width: number; height: number };
// };

// export default function SkillSection() {
//   const [skills, setSkills] = useState<CMSSkill[]>([]);

//   useEffect(() => {
//     async function fetchSkills() {
//       try {
//         const res = await client.get<{ contents: CMSSkill[] }>({
//           endpoint: "skills",
//         });
//         console.log("Fetched skills:", res.contents);
//         setSkills(res.contents);
//       } catch (err) {
//         console.error("Failed to fetch skills:", err);
//       }
//     }
//     fetchSkills();
//   }, []);

//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             {skills.map((skill) => (
//               <li key={skill.id} className={styles.skillItem}>
//                 {skill.image?.url ? (
//                   <Image
//                     src={skill.image.url}
//                     alt={skill.skillname}
//                     width={skill.image.width}
//                     height={skill.image.height}
//                   />
//                 ) : (
//                   <span className={styles.fallbackIcon}>•</span>
//                 )}
//                 <p>{skill.skillname}</p>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../../_libs/microcms";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// type CMSSkill = {
//   id: string;
//   skillname: string;
//   image?: {
//     url: string;
//     width: number;
//     height: number;
//   };
// };

// export default function SkillSection() {
//   const [skills, setSkills] = useState<CMSSkill[]>([]);

//   useEffect(() => {
//     // 🔑 Verify env vars
//     console.log("🔑 DOMAIN:", process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN);
//     console.log("🔑 APIKEY:", process.env.NEXT_PUBLIC_MICROCMS_API_KEY);

//     async function fetchSkills() {
//       try {
//         // 🔍 Fetch and log the raw CMS response
//         const res = await client.get<{ contents: CMSSkill[] }>({
//           endpoint: "skills",
//         });
//         console.log("📡 CMS response:", res);

//         // Store everything, or filter out entries lacking image if you prefer:
//         setSkills(res.contents);
//       } catch (err) {
//         console.error("❌ Failed to fetch skills:", err);
//       }
//     }

//     fetchSkills();
//   }, []);

//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             {skills.map((skill) => (
//               <li key={skill.id} className={styles.skillItem}>
//                 {skill.image?.url ? (
//                   <Image
//                     src={skill.image.url}
//                     alt={skill.skillname}
//                     width={skill.image.width}
//                     height={skill.image.height}
//                   />
//                 ) : (
//                   <span className={styles.fallbackIcon}>•</span>
//                 )}
//                 <p>{skill.skillname}</p>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import { client } from "../../_libs/microcms";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import styles from "../skill/page.module.css";

// type CMSSkill = {
//   id: string;
//   skillname: string;
//   image?: {
//     url: string;
//     width: number;
//     height: number;
//   };
// };

// export default function SkillSection() {
//   const [skills, setSkills] = useState<CMSSkill[]>([]);

//   useEffect(() => {
//     client
//       .get<{ contents: CMSSkill[] }>({ endpoint: "skills" })
//       .then((res) => {
//         console.log("📡 CMS response:", res.contents);
//         setSkills(res.contents);
//       })
//       .catch((err) => {
//         console.error("❌ fetch error:", err);
//       });
//   }, []);

//   return (
//     <section id="skill" className={styles.skillMain}>
//       <div className={styles.overlay}>
//         <motion.div
//           className={styles.content}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <h2 className={styles.title}>My Skills</h2>
//           <ul className={styles.skillList}>
//             {skills.map((skill) => (
//               <li key={skill.id} className={styles.skillItem}>
//                 {skill.image?.url ? (
//                   <Image
//                     src={skill.image.url}
//                     alt={skill.skillname}
//                     width={skill.image.width}
//                     height={skill.image.height}
//                   />
//                 ) : (
//                   <span className={styles.fallbackIcon}>•</span>
//                 )}
//                 <p>{skill.skillname}</p>
//               </li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { client } from "../../_libs/microcms";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../skill/page.module.css";

type CMSSkill = {
  id: string;
  skillname: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
};

export default function SkillSection() {
  const [skills, setSkills] = useState<CMSSkill[]>([]);

  useEffect(() => {
    client
      .get<{ contents: CMSSkill[] }>({ endpoint: "skills" })
      .then((res) => setSkills(res.contents))
      .catch(console.error);
  }, []);

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
            {skills.map((skill) => (
              <li key={skill.id} className={styles.skillItem}>
                {skill.image?.url && (
                  <Image
                    src={skill.image.url}
                    alt={skill.skillname}
                    width={50}
                    height={50}
                    className={styles.skillIcon}
                  />
                )}
                <p>{skill.skillname}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
