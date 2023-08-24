import styles from "./page.module.css";
import BlocListBitcoin from "./components/BlocListBitcoin";

//page principal du projet avec l'unique composant

export default function Home() {
  return (
    <main className={styles.main}>
      <BlocListBitcoin />
    </main>
  );
}
