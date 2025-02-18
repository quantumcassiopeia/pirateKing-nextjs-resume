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
    label: "(91) 98410-7575",
    href: "https://wa.me/5591984107575",
    icon: "./icons/WhatsApp.svg",
  },
];

const hardSkills = [
  "5 anos de experiência",
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
  "Banco de Dados",
  "SQL",
  "Java",
  "C#",
  "C++",
  "C",
  "Python",
  "Kotlin",
  "Android Jetpack Compose",
  "Redes Locais (LAN)",
];

const softSkills = [
  "Trabalho em equipe",
  "Comunicação",
  "Solução de problemas",
  "Proatividade",
  "Pensamento crítico",
  "Adaptabilidade",
  "Liderança",
  "Resiliência",
  "Inteligência emocional",
  "Responsabilidade",
  "Empatia",
  "Criatividade",
  "Gestão de tempo",
];

const xp = [
  {
    job: "Desenvolvedor FullStack",
    company: "Rede Autoestima-se",
    location: "Remoto (Brasil)",
    date: "12/2023 - atualmente",
    description:
      "Desenvolvi e implementei o site da rede Autoestima-se, criando uma plataforma funcional e acessível para os usuários. Atualmente, sou responsável pela manutenção contínua do site, realizando atualizações, correções e melhorias de performance para garantir uma experiência otimizada para os visitantes.",
  },
  {
    job: "Extensionista",
    company: "Escola Barão Triunfo",
    location: "Belém/PA",
    date: "03/2023 – 07/2023",
    description:
      "Participei de um projeto voluntário com o objetivo de ensinar linguagens de programação a estudantes de escolas públicas. Além disso, prestei suporte em TI, abordando temas de engenharia da computação e promovendo práticas sustentáveis e de consciência social no contexto educacional.",
  },
  {
    job: "Estagiário",
    company: "Receita Federal do Brasil",
    location: "Belém/PA",
    date: "2017 - 2018",
    description:
      "Desenvolvi e mantive páginas em HTML/CSS/JavaScript, além de fornecer suporte a servidores de banco de dados. Também executei lançamentos contábeis, atendi ao público e ofereci suporte técnico a contribuintes, garantindo a resolução eficaz de suas questões fiscais e tributárias.",
  },
  {
    job: "Estagiário",
    company: "Ministério Público do Pará",
    location: "Belém/PA",
    date: "2016 - 2017",
    description:
      "Atuei no lançamento de guias contábeis e no gerenciamento de planilhas Excel. Também fui responsável pela escrituração de livros contábeis, suporte em sistemas de banco de dados e servidores, além de atuar na manutenção de redes locais e na aplicação de HTML/CSS para o desenvolvimento de interfaces.",
  },
];

const academic = [
  {
    course: "Graduando",
    institution: "Faculdade Estácio de Belém",
    location: "Remoto (Brasil)",
    date: "03/2023 – 12/2026",
  },
  {
    course: "Python",
    institution: "Cisco Networking Academy",
    location: "Remoto (Brasil)",
    date: "2023",
  },
  {
    course: "Endpoint Security",
    institution: "Cisco Networking Academy",
    location: "Remoto (Brasil)",
    date: "2023",
  },
  {
    course: "Linux Essentials",
    institution: "Network Development Group",
    location: "Remoto (Brasil)",
    date: "2024",
  },
  {
    course: "Análise de Dados",
    institution: "Faculdade Estácio de Belém",
    location: "Remoto (Brasil)",
    date: "2024",
  },
  {
    course: "Nuvem/AZW",
    institution: "Ka Solution",
    location: "Remoto (Brasil)",
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
