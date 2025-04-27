import styles from "./page.module.scss";

import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import XP from "@/components/XP/XP";

import { hardSkills, softSkills, academic, xp } from "@/messages/en";
import { title, contact } from "@/data/personalInfo";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title={title} contact={contact} />
      <Skills title={hardSkills.title} Skills={hardSkills.skills} />
      <Skills title={softSkills.title} Skills={softSkills.skills} />
      <XP title={xp.title} jobs={xp.jobs} />
      <Education title={academic.title} education={academic.school} />
    </div>
  );
}
