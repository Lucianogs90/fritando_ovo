import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Image from "next/image";

export default function PreviewPDF() {
  const router = useRouter();
  const { id } = router.query;

  const [receita, setReceita] = useState({});

  useEffect(() => {
    axios.get(`/api/receitas/${id}`).then((resposta) => {
      setReceita(resposta.data);
    });
  }, [router]);

  return (
    <>
      <Image
        src={`/images/capa.png`}
        alt={receita.titulo}
        width={1440}
        height={329}
        className={styles.capa}
      />

      <h1 className={styles.titulo}>{receita.titulo}</h1>

      <div className={styles.conteudo}>
        <div className={styles.especificacoes}>
          <Image
            src={`/images/relogio.svg`}
            alt={receita.titulo}
            width={21}
            height={21}
          />

          <p>{receita.tempoPreparo} minutos</p>
        </div>

        <div className={styles.especificacoes}>
          <Image
            src={`/images/comida.svg`}
            alt={receita.titulo}
            width={21}
            height={21}
          />
          <p>{receita.porcoes} porções</p>
        </div>

        <h2 className={styles.subtitle}>Ingredientes</h2>

        <ul className={styles.list}>
          <li>Ovos</li>
          <li>Arroz</li>
          <li>Pepino</li>
          <li>Sal</li>
          <li>Alho</li>
        </ul>

        <h2 className={styles.subtitle}>Modo de preparo</h2>

        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste quasi ipsam facilis numquam tempore magni, veniam recusandae eaque, laborum neque sit exercitationem, fugit reiciendis ullam at esse ut eius molestias?
        </p>

        <p className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dicta explicabo, voluptates quasi autem qui. Molestias ea odio suscipit cum. Illo odit excepturi incidunt ipsam? Odit dolor hic rerum delectus?
        </p>

        <p className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus facilis natus ipsam accusamus doloremque aspernatur cumque, voluptates quas asperiores deleniti dolores fugit laborum assumenda quibusdam hic recusandae pariatur voluptatem nisi.
        </p>

        <p className={styles.content}>Fonte: Tudo Gostoso</p>
      </div>
    </>
  );
}
