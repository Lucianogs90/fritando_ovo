import styles from "./styles.module.css";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CardList() {
  const [receitas, setReceitas] = useState([]);
  const url = "http://localhost:3000/api/receitas";

  useEffect(() => {
    axios.get(url).then((response) => setReceitas(response.data));
  }, []);

  return (
    <div className={styles.cardList}>
      {receitas.map((receita) => (
        <Card
          key={receita.id}
          id={receita.id}
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
