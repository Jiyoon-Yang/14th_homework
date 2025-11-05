import styles from "./styles.module.css";

export default function PurchaseDetail() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>title</div>
        <div className={styles.gap24}></div>
        <div className={styles.purchaseArea}>purchase-area</div>
        <div className={styles.gap80}></div>
        <div className={styles.content}>content</div>
        <div className={styles.gap80}></div>
        <div className={styles.map}>map</div>
        <div className={styles.gap40}></div>
        <div className={styles.retrospect}>retrospect</div>
        <div className={styles.gap40}></div>
      </div>
    </div>
  );
}
