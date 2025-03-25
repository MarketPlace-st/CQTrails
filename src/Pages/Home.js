import Header from "../Componentes/Header";
import Footer from "../Componentes/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Header />

      <main className="main-content">
        {/* Aquí irá el contenido principal del landing page */}
      </main>

      <Footer />
    </div>
  );
}