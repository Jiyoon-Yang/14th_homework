"use client";

import styles from "./styles.module.css";

interface PurchaseModalProps {
  onClose: () => void;
}

export default function PurchaseModal({ onClose }: PurchaseModalProps) {
  return (
    <div className={styles.modalContent} data-testid="purchase-modal">
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>구매 확인</h2>
      </div>
      <div className={styles.modalBody}>
        <p className={styles.modalText}>
          숙박권을 구매하시겠습니까?
        </p>
        <p className={styles.modalSubText}>
          포인트를 사용하여 구매가 진행됩니다.
        </p>
      </div>
      <div className={styles.modalFooter}>
        <button 
          className={styles.modalCancelButton} 
          onClick={onClose}
          type="button"
        >
          취소
        </button>
        <button 
          className={styles.modalConfirmButton}
          type="button"
        >
          구매하기
        </button>
      </div>
    </div>
  );
}

