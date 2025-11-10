"use client";

import { useModalStore } from "@/app/commons/stores/store";
import { ReactNode } from "react";

export const usePurchaseModal = () => {
  const { openModal, closeModal } = useModalStore();

  const handleOpenPurchaseModal = (content: ReactNode) => {
    openModal(content);
  };

  const handleClosePurchaseModal = () => {
    closeModal();
  };

  return {
    handleOpenPurchaseModal,
    handleClosePurchaseModal,
  };
};

