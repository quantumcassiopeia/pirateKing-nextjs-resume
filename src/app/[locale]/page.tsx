"use client";

import styles from "./page.module.scss";

import { useState } from "react";

import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import XP from "@/components/XP/XP";

import * as messagesEn from "@/messages/en";
import * as messagesPt from "@/messages/pt";

import { title, contact } from "@/data/personalInfo";

//

export default function Home() {
  const [lang, setLang] = useState(messagesEn);
  function toggleLang() {
    setLang(lang === messagesEn ? messagesPt : messagesEn);
  }

  return (
    <div className={styles.page}>
      <Header title={title} contact={contact} />
      <Skills title={lang.hardSkills.title} Skills={lang.hardSkills.skills} />
      <Skills title={lang.softSkills.title} Skills={lang.softSkills.skills} />
      <XP title={lang.xp.title} jobs={lang.xp.jobs} />
      <Education title={lang.academic.title} education={lang.academic.school} />
      <button className={styles.toggleLang} onClick={toggleLang}>
        pt/en
      </button>
    </div>
  );
}
