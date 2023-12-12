import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/pictures/logo.png";

import { getProductFromLocalStorage } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";

import styles from "../Style.module.scss";

const vals = ["BYN", "USD"];

export default function ProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adpMeny, setAdpMeny] = useState(false);

  const { product } = useSelector((x) => x.products);
  const [index, setIndex] = useState(0);

  const swapIndex = () => {
    setIndex(index + 1 >= vals.length ? 0 : index + 1);
  };

  useEffect(() => {
    dispatch(getProductFromLocalStorage());
  }, []);

  return (
    <div>
      <header className={styles.basic_header}>
        <nav className={adpMeny ? styles.on : styles.off}>
          <div className={styles.container}>
            <div id="base" className={styles.navigation}>
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
                <p>Валюто: BYN</p>
                <Link>Адресс</Link>
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
                styles.adp_meny +
                " " +
                (adpMeny ? styles.on : styles.off) +
                " " +
                styles.half
              }
            >
              <div className={styles.nav_interface}>
                <p onClick={swapIndex}>Валюта: {vals[index]}</p>

                <Link to="/Order">Адресс</Link>
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

      <main className={styles.container + " " + styles.product_data}>
        <div className={styles.product_intro}>
          <img
            src={`http://localhost:5173/src/assets/pictures/${product?.img}`}
            alt=""
          />
          <h1>{product?.name}</h1>
        </div>

        <div className={styles.product_info}>
          <p className={styles.description}>{product?.description}</p>

          <div>
            <p>Характеристики</p>
            <ul>
              {product?.characteristics?.map((ch, i) => (
                <li key={i}>{ch}</li>
              ))}
            </ul>
          </div>

          <div className={styles.full_buttons}>
            <button
              onClick={() => {
                navigate("/");
              }}
            >
              Категории
            </button>
            <button
              onClick={() => {
                navigate("/order");
              }}
            >
              Купить
            </button>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              В корзину
            </button>
          </div>
        </div>
      </main>

      <footer>
        <p>Круглик Дмитрий Владимирович исит 2-2</p>
      </footer>
    </div>
  );
}
