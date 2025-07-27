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
    description: string[];
  }[];
}) {
  return (
    <div>
      <h1 className="sectionTitle">{title}</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} className={styles.jobList}>
            <div className={styles.jobHeader}>
              <h2 className={styles.title}>{job.job}</h2>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.location}>{job.location}</p>
              <p className={styles.date}>{job.date}</p>
            </div>
            <ul>
              {job.description.map((description, index) => (
                <li key={index}>• {description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
