import styles from "./CardList.module.css";
import Card from "../Card";

export default function CardList() {
  return (
    <div className={styles.cardList}>
      <Card titulo="Ovo com arroz e pepino" tempoPreparo="25" porcoes="2" />

      <Card titulo="Ovo de Codorna" tempoPreparo="15" porcoes="2" />

      <Card titulo="Ovo com abacate" tempoPreparo="10" porcoes="1" />
    </div>
  );
}
