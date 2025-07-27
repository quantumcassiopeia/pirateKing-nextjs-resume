import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

import contact from "@/data/contactData";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className={styles.headerWrapper}>
      <h1>{t("name")}</h1>
      <h3>{t("job")}</h3>
      <a
        className={styles.portfolio}
        href="https://qcsolutions.tech"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("portfolioTitle")}{" "}
        <span style={{ textDecoration: "underline" }}>
          {t("portfolioLink")}
        </span>
      </a>
      <div>
        <ul className={styles.contactWrapper}>
          {contact.map((item) => (
            <li key={item.href}>
              <a
                className={styles.contactItem}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={28}
                  height={28}
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
