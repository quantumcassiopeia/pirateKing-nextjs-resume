import styles from "./styles.module.scss";

export default function Education({
  title,
  degrees,
}: {
  title: string;
  degrees: {
    course: string;
    institution: string;
    location: string;
    date: string;
  }[];
}) {
  return (
    <div>
      <h1 className="sectionTitle">{title}</h1>
      <ul>
        {degrees.map((degree, index) => (
          <li key={index} className={styles.educationWrapper}>
            <p>{degree.course}</p>
            <p>{degree.institution}</p>
            <p>{degree.location}</p>
            <p className={styles.date}>{degree.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
