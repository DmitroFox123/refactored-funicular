import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";

import styles from "../Style.module.scss";

const vals = ["BYN", "USD"];

export default function Order() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [adpMeny, setAdpMeny] = useState(false);
  const [index, setIndex] = useState(0);

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

              <div className={styles.nav_interface}>
                <p onClick={swapIndex}>Валюта: {vals[index]}</p>

                <Link to="/Order">Адресс</Link>
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
                <p>Валюта: BYN</p>
                <Link to="/Order">Адрес</Link>
                <Link to="/cart">Корзина</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className={styles.get_back + " " + styles.container}>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          назад
        </button>
      </section>

      <main className={styles.container + " " + styles.form}>
        <h2></h2>
        <form action="">
          <div>
            <p>Имя</p>
            <input type="text" />
          </div>
          <div>
            <p>Фамилия</p>
            <input type="text" />
          </div>
          <div>
            <p>Отчество</p>
            <input type="text" />
          </div>
          <div>
            <p>Электронная почта</p>
            <input type="text" />
          </div>
          <div>
            <p>Номер телефона</p>
            <input type="text" />
          </div>
          <div>
            <p>Адресс доставки</p>
            <input type="text" />
          </div>
          <div>
            <p>Почтовый индекс</p>
            <input type="text" />
          </div>

          <button className={styles.form_btn}>Оформить заказ</button>
        </form>
      </main>

      <footer>
        <p>Круглик Дмитрий Владимирович исит 2-2</p>
      </footer>
    </>
  );
}
