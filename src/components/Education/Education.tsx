import React from "react";
import styles from "./styles.module.scss";

type Academic = {
  course: string;
  institution: string;
  location: string;
  date: string;
};
type EducationProps = {
  title: string;
  education: Academic[];
};

const Education: React.FC<EducationProps> = ({ title, education }) => {
  return (
    <div>
      <h3 className="sectionTitle">{title}</h3>
      {education.map((academics, index) => (
        <div className={styles.educationWrapper} key={index}>
          <p>{academics.course}</p>
          <p className={styles.institution}>{academics.institution}</p>
          <p className={styles.location}>{academics.location}</p>
          <p className={styles.date}>{academics.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
