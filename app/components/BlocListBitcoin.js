"use client";
import { useEffect, useState } from "react";
import styles from "./components.module.css";

//composant du formulaire d'appel à l'API

export default function BlocListBitcoin() {
  const [rateBitcoin, setRateBitcoin] = useState({});
  const [value, setValue] = useState("USD");

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRateBitcoin(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleButton(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.entireBlocBitcoin}>
      <h1>
        Aujourd'hui, BTC vaut {rateBitcoin.bpi[value].symbol}
        {rateBitcoin.bpi[value].rate}
      </h1>
      <form className={styles.bitcoinForm}>
        <label>monnaie : </label>
        <select
          name="currency"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>{" "}
        <br />
        <button onClick={handleButton} className={styles.buttonStyle}>
          Hop
        </button>
      </form>
    </section>
  );
}
