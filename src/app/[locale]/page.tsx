import styles from "./page.module.scss";
import { useTranslations } from "next-intl";
import Skills from "@/components/Skills/Skills";
import XP from "@/components/XP/XP";

export default function Home() {
  const skills = useTranslations("skills");
  const xp = useTranslations("experience");
  return (
    <div className={styles.page}>
      <Skills
        title={skills("hardSkills.title")}
        skills={skills.raw("hardSkills.items")}
      />
      <Skills
        title={skills("softSkills.title")}
        skills={skills.raw("softSkills.items")}
      />
      <XP title={xp("title")} jobs={xp.raw("jobs")} />
    </div>
  );
}
