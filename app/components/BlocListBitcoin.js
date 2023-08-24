"use client";
import { useEffect, useState } from "react";
import styles from "./components.module.css";

//composant du formulaire d'appel à l'API

export default function BlocListBitcoin() {
  const [rateBitcoin, setRateBitcoin] = useState({});
  const [valueH1, setValueH1] = useState(" ");
  const [value, setValue] = useState("USD");

  //condition pour faire afficher le bon symbole selon la monnaie choisie
  function getCurrencySymbol(currency) {
    switch (currency) {
      case "USD":
        return "$";
        break;
      case "GBP":
        return "£";
        break;
      case "EUR":
        return "€";
        break;
      default:
        return "";
    }
  }

  //Récupération des données de l'API
  function callAPI() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => {
        setRateBitcoin(data);
        setValueH1(getCurrencySymbol(value) + data.bpi[value].rate);
      })
      .catch((err) => console.log(err));
  }

  //définition d'un événement utilisateur au clic sur l'unique bouton
  function handleButton(e) {
    e.preventDefault();
    callAPI();
  }

  //Affichage sur le DOM
  return (
    <section className={styles.entireBlocBitcoin}>
      <img
        src="/quotes.svg"
        style={{ position: "absolute", top: "-8%", left: "40%" }}
        alt="Logo des guillemets"
      />
      <h1 style={{ textAlign: "center" }}>Aujourd'hui, BTC vaut {valueH1}</h1>
      <form className={styles.bitcoinForm}>
        <div className={styles.selectCurrency}>
          <label htmlFor="currency">monnaie : </label>
          <select
            className={styles.selectBoxCurrency}
            name="currency"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if ("bpi" in rateBitcoin) {
                setValueH1(
                  getCurrencySymbol(e.target.value) +
                    rateBitcoin.bpi[e.target.value].rate
                );
              }
            }}
          >
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="EUR">EUR</option>
          </select>{" "}
        </div>
        <br />
        <button onClick={handleButton} className={styles.buttonStyle}>
          <img src="/plus.svg" alt="Icône plus sur le bouton du formulaire" />{" "}
          Hop !
        </button>
      </form>
    </section>
  );
}
