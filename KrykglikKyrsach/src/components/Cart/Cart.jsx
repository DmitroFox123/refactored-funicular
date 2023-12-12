import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/pictures/logo.png";

import { getCartFromLocalStorage } from "../../redux/cartSlice";

import CartItem from "./CartItem";

import styles from "../Style.module.scss";

const vals = ["BYN", "USD"];

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [adpMeny, setAdpMeny] = useState(false);

  const { cart } = useSelector((x) => x.cart);

  const [cartFull, setCart] = useState(cart);
  const [finalPrice, setPrice] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(getCartFromLocalStorage());
    calculatePrice(cart);
  }, []);

  useEffect(() => {
    setCart(cart);
    calculatePrice(cart);
  }, [cart]);

  const swapIndex = () => {
    setIndex(index + 1 >= vals.length ? 0 : index + 1);
  };

  const calculatePrice = (newCart) => {
    if (newCart.length === 0) {
      setPrice(0);
      return;
    }

    let price = 0;

    for (let i = 0; i < newCart.length; i++) {
      price += newCart[i]?.price;
    }

    setPrice(price);
  };

  const filterByName = () => {
    if (searchValue.trim().length === 0) {
      setCart(cart);

      return;
    }

    setCart(cart.filter((p) => p.name.includes(searchValue)));
  };

  return (
    <div className={styles.content}>
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
        {cartFull?.length > 0 ? (
          cartFull?.map((product, i) => <CartItem key={i} props={product} />)
        ) : (
          <h1>Пусто</h1>
        )}
      </main>

      <div className={styles.dop_info + " " + styles.container}>
        <button
          className={styles.back}
          onClick={() => {
            navigate("/");
          }}
        >
          назад
        </button>

        <div className={styles.order}>
          <p>итоговая цена: {finalPrice}byn</p>
          <button
            onClick={() => {
              navigate("/order");
            }}
          >
            заказать
          </button>
        </div>
      </div>

      <footer>
        <p>Круглик Дмитрий Владимирович исит 2-2</p>
      </footer>
    </div>
  );
}
