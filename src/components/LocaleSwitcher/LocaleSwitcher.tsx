"use client";

import styles from "./styles.module.scss";

import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div className={styles.container}>
      <TranslateIcon className={styles.icon} />
      <div className={styles.options}>
        <button
          className={`${styles.button} ${
            params.locale === "en" ? styles.active : ""
          }`}
          onClick={() => handleLocaleChange("en")}
        >
          English
        </button>
        <button
          className={`${styles.button} ${
            params.locale === "pt-BR" ? styles.active : ""
          }`}
          onClick={() => handleLocaleChange("pt-BR")}
        >
          Português
        </button>
      </div>
    </div>
  );
}
