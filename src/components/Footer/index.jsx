import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="/images/frigideira_gray.svg"
        alt="Ícone de uma frigideira em tons de cinza"
      />
      <h2>
        Fritando ovo - Receitas fáceis
        <br />2022
      </h2>
    </footer>
  );
}
