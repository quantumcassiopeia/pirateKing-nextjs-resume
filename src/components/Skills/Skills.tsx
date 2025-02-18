import styles from "./styles.module.scss";

type SkillsProps = {
  title: string;
  Skills: string[];
};

const Skills: React.FC<SkillsProps> = ({ Skills, title }) => {
  return (
    <div>
      <h2 className="sectionTitle">{title}</h2>
      <ul className={styles.skills}>
        {Skills.map((skills) => (
          <li key={skills}>&nbsp;{skills} |</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
