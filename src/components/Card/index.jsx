import styles from "./Card.module.css";

export default function Card({ titulo, tempoPreparo, porcoes }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{titulo}</h2>

      <div className={styles.card__content}>
        <span>{tempoPreparo} minuto(s)</span>

        <span>{porcoes} pessoa(s)</span>
      </div>
    </div>
  );
}
