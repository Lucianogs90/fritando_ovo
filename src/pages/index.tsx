import Card from "../components/Card";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      Pagina inicial
      <Card 
        titulo="Ovo com arroz e pepino" 
        tempoPreparo="25" 
        porcoes="2" />
      
      <Card 
        titulo="Ovo de Codorna" 
        tempoPreparo="15" 
        porcoes="2"/>
      
      <Card 
        titulo="Ovo com abacate" 
        tempoPreparo="10" 
        porcoes="1"/>
    </>
  );
}
