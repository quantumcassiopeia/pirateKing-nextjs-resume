import React from "react";
import styles from "./styles.module.scss";

type Academic = {
  course: string;
  institution: string;
  location: string;
  date: string;
};
type EducationProps = {
  education: Academic[];
};

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div>
      <h3 className="sectionTitle">Education</h3>
      {education.map((academics, index) => (
        <div className={styles.educationWrapper} key={index}>
          <p>{academics.course}</p>
          <p className={styles.institution}>{academics.institution}</p>
          <p className={styles.location}>{academics.location}</p>
          <p>{academics.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
