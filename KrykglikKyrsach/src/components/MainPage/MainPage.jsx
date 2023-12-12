import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";

import TypeCard from "./TypeCard";

import styles from "../Style.module.scss";

const vals = ["BYN", "USD"];

export default function MainPage() {
  const navigate = useNavigate();

  const [adpMeny, setAdpMeny] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { typesRepresents } = useSelector((state) => state.products);

  const [prWithFilter, setPrWithFilter] = useState(typesRepresents);
  const [index, setIndex] = useState(0);

  const filterByName = () => {
    if (searchValue.trim().length === 0) {
      setPrWithFilter(typesRepresents);

      return;
    }

    setPrWithFilter(
      typesRepresents.filter((i) => i.name.includes(searchValue))
    );
  };

  const swapIndex = () => {
    setIndex(index + 1 >= vals.length ? 0 : index + 1);
  };

  return (
    <>
      <header className={styles.basic_header}>
        <nav className={adpMeny ? styles.on : styles.off}>
          <div className={styles.container}>
            <div className={styles.navigation}>
              <img
                onClick={() => {
                  navigate("/");
                }}
                src={logo}
                className={styles.logo}
              />
              <p className={styles.title}>FoxyExpress</p>
              <p className={styles.to_hide}>Каталог</p>
              <section className={styles.search_field + " " + styles.to_hide}>
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <button onClick={filterByName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </button>
              </section>

              <div className={styles.nav_interface}>
                <p onClick={swapIndex}>Валюта: {vals[index]}</p>

                <Link to="/Order">Адрес</Link>
                <Link to="/cart">Корзина</Link>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className={styles.adp_btn}
                onClick={() => {
                  setAdpMeny(!adpMeny);
                  console.log("es");
                }}
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </div>

            <div
              className={
                styles.adp_meny + " " + (adpMeny ? styles.on : styles.off)
              }
            >
              <div className={styles.nav_interface}>
                <p>Валюто: BYN</p>
                <Link to="/Order">Адресс</Link>
                <Link to="/cart">Корзина</Link>
              </div>
              <section
                className={styles.search_field + " " + styles.search_field}
              >
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <button onClick={filterByName}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 -960 960 960"
                    width="24"
                  >
                    <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                  </svg>
                </button>
              </section>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.container + " " + styles.main_catalog}>
        {prWithFilter.length === 0 ? (
          <h1 style={{ textAlign: "center", width: "100%" }}>Ничего нет</h1>
        ) : (
          prWithFilter?.map((item, i) => <TypeCard props={item} key={i} />)
        )}
      </main>
      <footer>
        <p>Круглик Дмитрий Владимирович исит 2-2</p>
      </footer>
    </>
  );
}
