import styles from "./styles.module.css";

export default function Mypage() {
  return (
    <div className={styles.container}>
      <div className={styles.gap}></div>
      <div className={styles.mypageLabel}>mypage-label</div>
      <div className={styles.gap}></div>
      <div className={styles.myprofile}>myprofile</div>
      <div className={styles.tabs}>tabs</div>
      <div className={styles.gapSmall}></div>
      <div className={styles.searchbar}>searchbar</div>
      <div className={styles.gapSmall}></div>
      <div className={styles.listArea}>list-area</div>
      <div className={styles.gap}></div>
    </div>
  );
}
