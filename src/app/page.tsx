import styles from "./page.module.scss";

import Education from "@/components/Education/Education";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";
import XP from "@/components/XP/XP";

const contacts = [
  {
    label: "/robert-rsouza",
    href: "https://www.linkedin.com/in/robert-rsouza/",
    icon: "./icons/LinkedIn.svg",
  },
  {
    label: "/quantumcassiopeia",
    href: "https://github.com/quantumcassiopeia/about-me",
    icon: "./icons/Github.svg",
  },
  {
    label: "quantumpeia.dev@gmail.com",
    href: "malito:quantumpeia.dev@gmail.com",
    icon: "./icons/E-mail.svg",
  },
  {
    label: "+55 91 98410-7575",
    href: "https://wa.me/5591984107575",
    icon: "./icons/WhatsApp.svg",
  },
];

const hardSkills = [
  "5 years of experience",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "TypeScript",
  "JavaScript",
  "Git",
  "Sass",
  "CSS",
  "HTML",
  "Database",
  "SQL",
  "Java",
  "C#",
  "C++",
  "C",
  "Python",
  "Kotlin",
  "Android Jetpack Compose",
  "LAN",
];

const softSkills = [
  "Teamwork",
  "Communication",
  "Problem-solving",
  "Proactivity",
  "Critical thinking",
  "Adaptability",
  "Leadership",
  "Resilience",
  "Emotional intelligence",
  "Responsibility",
  "Empathy",
  "Creativity",
  "Time management",
];

const xp = [
  {
    job: "FullStack Developer",
    company: "Rede Autoestima-se",
    location: "Remote (Brazil)",
    date: "Dec 2023 - Present",
    description:
      "Developed and implemented the Autoestima-se network website, creating a functional and accessible platform for users. Currently responsible for the site's ongoing maintenance, performing updates, fixes, and performance improvements to ensure an optimized user experience.",
  },
  {
    job: "Extensionist",
    company: "Escola Barão Triunfo",
    location: "Belém/PA",
    date: "Mar 2023 – Jul 2023",
    description:
      "Participated in a volunteer project aimed at teaching programming languages to public school students. Additionally, provided IT support, addressing computer engineering topics and promoting sustainable practices and social awareness in the educational context.",
  },
  {
    job: "Intern",
    company: "Receita Federal do Brasil",
    location: "Belém/PA",
    date: "2017 - 2018",
    description:
      "Developed and maintained HTML/CSS/JavaScript pages, as well as provided support for database servers. Also performed accounting entries, assisted the public, and offered technical support to taxpayers, ensuring the effective resolution of their tax and fiscal issues.",
  },
  {
    job: "Intern",
    company: "Ministério Público do Pará",
    location: "Belém/PA",
    date: "2016 - 2017",
    description:
      "Worked on accounting guide entries and Excel spreadsheet management. Also responsible for bookkeeping, database and server system support, local network maintenance, and the application of HTML/CSS for interface development.",
  },
];

const academic = [
  {
    course: "Undergraduate",
    institution: "Faculdade Estácio de Belém",
    location: "Remote (Brazil)",
    date: "03/2023 – 12/2026",
  },
  {
    course: "Python",
    institution: "Cisco Networking Academy",
    location: "Remote (Brazil)",
    date: "2023",
  },
  {
    course: "Endpoint Security",
    institution: "Cisco Networking Academy",
    location: "Remote (Brazil)",
    date: "2023",
  },
  {
    course: "Linux Essentials",
    institution: "Network Development Group",
    location: "Remote (Brazil)",
    date: "2024",
  },
  {
    course: "Data Analysis",
    institution: "Faculdade Estácio de Belém",
    location: "Remote (Brazil)",
    date: "2024",
  },
  {
    course: "Cloud/AZW",
    institution: "Ka Solution",
    location: "Remote (Brazil)",
    date: "2024",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header fullName="Robert R. Souza" contact={contacts} />
      <Skills title="Hard Skills" Skills={hardSkills} />
      <Skills title="Soft Skills" Skills={softSkills} />
      <XP jobs={xp} />
      <Education education={academic} />
    </div>
  );
}
