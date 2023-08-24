import styles from "./page.module.css";
import BlocListBitcoin from "./components/BlocListBitcoin";

export default function Home() {
  return (
    <main className={styles.main}>
      <BlocListBitcoin />
    </main>
  );
}
