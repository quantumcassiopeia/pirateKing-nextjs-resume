import styles from "./styles.module.scss";

export default function XP({
  title,
  jobs,
}: {
  title: string;
  jobs: {
    job: string;
    company: string;
    location: string;
    date: string;
    description: string;
  }[];
}) {
  return (
    <div>
      <h1 className="sectionTitle">{title}</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <div className={styles.jobHeader}>
              <h2 className={styles.title}>{job.job}</h2>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.location}>{job.location}</p>
              <p>{job.date}</p>
            </div>
            <p className={styles.description}>• {job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
