import styles from "./CardList.module.css";
import Card from "../Card";

export default function CardList({ receitas }) {
  return (
    <div className={styles.cardList}>
      {receitas.map((receita) => (
        <Card
          key={receita.id}
          titulo={receita.titulo}
          tempoPreparo={receita.tempoPreparo}
          porcoes={receita.porcoes}
          imagem={receita.imagem}
          descricao={receita.descricao}
        />
      ))}
    </div>
  );
}
