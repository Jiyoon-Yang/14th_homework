"use client";

import { create } from "zustand";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

interface ModalState {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  content: null,
  openModal: (content: React.ReactNode) =>
    set({ isOpen: true, content: content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));

interface IModalProviderProps {
  children: React.ReactNode;
}

function Modal() {
  const { isOpen, content, closeModal } = useModalStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={closeModal}>
      <div className={styles.wrapper} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>,
    document.body
  );
}

export default function ModalProvider({ children }: IModalProviderProps) {
  return (
    <>
      {children}
      <Modal />
    </>
  );
}

