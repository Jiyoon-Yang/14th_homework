"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useModalStore } from "../../stores/store";
import styles from "./modal.provider.module.css";

interface IProps {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: IProps) {
  const { isOpen, content, closeModal } = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {children}
      {mounted &&
        isOpen &&
        createPortal(
          <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={styles.modal}>{content}</div>
          </div>,
          document.body
        )}
    </>
  );
}
