"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export default function ModalMobile() {
  const t = useTranslations("ModalMobile");
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${isOpen ? styles.modalMobileOpen : styles.modalMobileClose}`}
    >
      <div className={styles.modalContent}>
        <button onClick={toggleModal} className={styles.closeButton}>
          X
        </button>
        <p className={styles.description}>{t("description")}</p>
      </div>
    </div>
  );
}
