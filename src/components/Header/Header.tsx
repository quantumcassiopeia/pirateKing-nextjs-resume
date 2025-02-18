import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

type ContactItem = {
  label: string;
  href: string;
  icon: string;
};

type HeaderProps = {
  fullName: string;
  contact: ContactItem[];
};

const Header: React.FC<HeaderProps> = ({ fullName, contact }) => {
  return (
    <div className={styles.headerWrapper}>
      <h1 className={styles.fullName}>{fullName}</h1>
      <ul className={styles.contact}>
        {contact.map(({ label, href, icon }) => (
          <li key={label}>
            <Link className={styles.contactItem} href={href}>
              {<Image src={icon} alt={label} width={20} height={20} />} {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
