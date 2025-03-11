import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";


const Hero = () => {
  console.log(getImageUrl);
  console.log(getImageUrl("hero/heroImage.png"));
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shruti Kumari!👋</h1>
        <p className={styles.description}>
          I'm a <strong>Front-End Developer</strong> with a passion for crafting visually appealing, high-performance, and user-friendly web applications.
          With expertise in <strong>React.js, JavaScript, HTML, CSS,</strong> and modern UI frameworks, I specialize in building interactive and responsive interfaces
          that enhance user experience.
        </p>
        <a href="mailto:shrutikumari9208@gmail.com" className={styles.contactbtn}>Contact Me</a>
      </div>

      <img src={getImageUrl("hero/heroImage.png")} alt="hero-img" className={styles.heroimg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero
