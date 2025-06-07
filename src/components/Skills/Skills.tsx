import styles from "./styles.module.scss";

export default function Skills({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div>
      <h2 className="sectionTitle">{title}</h2>
      <ul className={styles.skills}>
        {skills.map((skill) => (
          <li key={skill}>&nbsp;{skill} |</li>
        ))}
      </ul>
    </div>
  );
}
