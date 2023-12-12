import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setProduct } from "../../redux/productsSlice";
import { addToCart } from "../../redux/cartSlice";

import styles from "../Style.module.scss";

export default function ProductCard({ props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className={styles.type_card}>
      <img className={styles.represent} src={`http://localhost:5173/src/assets/pictures/${props?.img}` } />
      <p>{props?.name}</p>

      <section className={styles.buttons}>
        <button
          onClick={() => {
            dispatch(setProduct(props));
            navigate("/product");
          }}
        >
          подробнее
        </button>
        <button
          onClick={() => {
            dispatch(addToCart(props));
          }}
        >
          в корзину
        </button>
      </section>
    </div>
  );
}
