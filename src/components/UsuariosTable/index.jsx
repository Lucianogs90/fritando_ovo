import styles from "./UsuariosTable.module.css";
import Usuario from "../Usuario";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UsuariosTable() {
  const [usuarios, setUsuarios] = useState([]);
  const url = "http://localhost:3010/usuarios";

  useEffect(() => {
    axios.get(url).then((response) => setUsuarios(response.data));
  }, []);

  return (
    <div className={styles.usuariosTable}>
      {usuarios.map((usuario) => (
        <Usuario
          key={usuario.id}
          nome={usuario.nome}
          email={usuario.email}
          senha={usuario.senha}
        />
      ))}
    </div>
  );
}
