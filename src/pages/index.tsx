import CardList from "../components/CardList";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import UsuariosTable from "../components/UsuariosTable";

export default function Home() {


  return (
    <>
      <Header />

      <CardList />

      <UsuariosTable />

      <Navigation /> 

      <Footer />
    </>
  );
}
