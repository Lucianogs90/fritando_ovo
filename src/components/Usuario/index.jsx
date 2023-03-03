import styles from "./Usuario.module.css";

export default function Usuario({ nome, email, senha }) {
  return (
    <table className={styles.usuario}>
      <h2 className={styles.usuario__nome}>{nome}</h2>
      <p className={styles.usuario__email}>{email}</p>
      <p className={styles.usuario__senha}>{senha}</p>

    </table>
    
    
  );
}
