import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

type ContactItem = {
  label: string;
  href: string;
  icon: string;
};

type HeaderProps = {
  title: {
    name: string;
    job?: string;
    city?: string;
  };
  contact: ContactItem[];
};

const Header: React.FC<HeaderProps> = ({ title, contact }) => {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.fullName}>{title.name}</h1>
      {title.job && <h2 className={styles.subheading}>{title.job}</h2>}
      {title.city && <h2 className={styles.subheading}>{title.city}</h2>}
      <ul className={styles.contact}>
        {contact.map(({ label, href, icon }) => (
          <li key={label}>
            <Link className={styles.contactItem} href={href}>
              <Image src={icon} alt={label} width={20} height={20} /> {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
