import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setType } from "../../redux/productsSlice";

import styles from "../Style.module.scss";

export default function TypeCard({ props }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <section
      className={styles.type_card}
      onClick={() => {
        dispatch(setType(props?.type));
        navigate("/catalog");
      }}
    >
      <img src={`http://localhost:5173/src/assets/pictures/${props?.img}`} />
      <p>{props?.name}</p>
    </section>
  );
}
