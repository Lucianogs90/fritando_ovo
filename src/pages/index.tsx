import CardList from "../components/CardList";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  const receitas = [
    {id: 1, titulo: "Arroz com ovo e pepino", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-01.png"},
    {id: 2, titulo: "Roscovo", tempoPreparo: "5", porcoes: "1", imagem:"/images/pexels-02.png"},
    {id: 3, titulo: "Ovo de codorna", tempoPreparo: "15", porcoes: "1", imagem:"/images/pexels-03.png"},
    {id: 4, titulo: "Ovo mexido", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-04.png"},
    {id: 5, titulo: "Ovo frito", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-05.png"},
    {id: 6, titulo: "Ovo cozido", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-06.png"},
    {id: 7, titulo: "Ovo pochê", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-07.png"},
    {id: 8, titulo: "Ovo de codorna", tempoPreparo: "15", porcoes: "1", imagem:"/images/pexels-03.png"},
    {id: 9, titulo: "Ovo mexido", tempoPreparo: "10", porcoes: "1", imagem:"/images/pexels-04.png"},
  ]

  return (
    <>
      <Header />

      <CardList receitas={receitas} />

      <Navigation /> 

      <Footer />
    </>
  );
}
