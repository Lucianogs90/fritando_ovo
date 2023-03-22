import styles from "./styles.module.css";

export default function Header() {

  return (
    <header className={styles.header}>
      <div>
        <img src="/images/frigideira.svg" alt="Imagem de uma frigideira" />
      </div>

      <div>
        <h1>Fritando ovo</h1>
        <h2>Receitas fáceis</h2>
      </div>
    </header>
  );
}
