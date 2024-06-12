"use client";
import React from "react";
import styles from "./Hero_section.module.css";

const Hero_section = () => {
  return (
    <header className={styles.hero}>
      <div className={styles["hero-content"]}>
        <h1 className={`${styles["hero-title"]} text-6xl`}>
          <span className="text-orange-600">Accomplish The Impossi</span>
          <span className={styles["gradient-text"]}>b</span>
          <span className="text-white">le</span>
        </h1>
        <h1 className={styles["hero-title"]}>Power Of AI</h1>
        <p className={`styles["hero-subtitle"] text-xl`}>
          We are an IT Consulting firm dedicated to helping organizations and
          individuals achieve set objectives by maintaining a secure and stable
          infrastructure, leveraging the power of data for effective decision
          making and creating a unique customer experience.
        </p>
        <a
          href="#"
          className=" hero-button mt-8 bg-black inline-block px-6 py-3 text-lg md:text-xl font-bold uppercase border border-orange-600 text-orange-600 hover:bg-transparent hover:text-orange-700 transition-colors duration-300 rounded-2xl"
        >
          AI Readiness Assessment
        </a>
      </div>
    </header>
  );
};

export default Hero_section;
