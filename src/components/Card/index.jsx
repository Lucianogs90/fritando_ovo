import Link from "next/link";
import styles from "./styles.module.css";

export default function Card({
  titulo,
  tempoPreparo,
  porcoes,
  imagem,
  descricao,
  id
}) {
  return (
    <main className={styles.cards__container}>
      <Link href={`/visualizar/${id}`}>
      <div className={styles.card}>
        <div className={styles.image__container}>
          <img src={imagem} alt={descricao} />
          <h2 className={styles.card__title}>{titulo}</h2>{" "}
        </div>
        <div className={styles.card__info}>
          <div className={styles.info__container}>
            <img src="images/relogio.svg" alt="Relógio" />
            <span className={styles.vector}>{tempoPreparo} minutos</span>
          </div>
          <div className={styles.info__container}>
            <img src="images/comida.svg" alt="Pote de comida" />
            <span className={styles.vector}>serve {porcoes} pessoas</span>
          </div>
        </div>
      </div>
      </Link>
    </main>
  );
}
