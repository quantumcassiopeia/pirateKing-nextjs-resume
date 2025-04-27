import styles from "./styles.module.scss";

type Job = {
  job: string;
  company: string;
  date: string;
  description: string;
};

type XPProps = {
  title: string;
  jobs: Job[];
};

const XP: React.FC<XPProps> = ({ title, jobs }) => {
  return (
    <div>
      <h2 className="sectionTitle">{title}</h2>
      {jobs.map((job, index) => (
        <div className={styles.job} key={index}>
          <div className={styles.jobHeader}>
            <h3>{job.job}</h3>
            <p className={styles.company}>{job.company}</p>
            <p className={styles.date}>{job.date}</p>
          </div>
          <p className={styles.description}>• {job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default XP;
