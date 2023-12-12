import { useDispatch } from "react-redux";

import { removeFromCart } from "../../redux/cartSlice";

import styles from "../Style.module.scss";

export default function CartItem({ props }) {
  const dispatch = useDispatch();

  return (
    <div style={{ cursor: "default" }} className={styles.type_card + " " + styles.cart_item}>
      <img src={`http://localhost:5173/src/assets/pictures/${props?.img}`} />
      <p>{props?.name}</p>

      <section className={styles.buttons}>
        <p>{props?.price}byn</p>
        <button
          onClick={() => {
            dispatch(removeFromCart(props));
          }}
        >
          убрать
        </button>
      </section>
    </div>
  );
}
