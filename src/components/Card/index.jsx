import styles from "./Card.module.css";

export default function Card({ titulo, tempoPreparo, porcoes }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.card__title}>{titulo}</h2>

      <div className={styles.card__content}>
        <div>
          <img src="/images/relogio.svg" alt="Ícone de um relógio" />
          <p>
            <span>{tempoPreparo} minuto(s)</span>
          </p>
        </div>

        <div>
          <img src="/images/hot-meal.svg" alt="Ícone de comida pronta" />
          <p>
            <span>{porcoes} pessoa(s)</span>
          </p>
        </div>
        
      </div>
    </div>
  );
}
