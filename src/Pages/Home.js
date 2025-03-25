import Header from "../Componentes/Header"
import HeroSection from "../Componentes/HeroSection"
import VehicleSection from "../Componentes/VehicleSection"
import CommercialVehicles from "../Componentes/CommercialVehicle"
import ServicesSection from "../Componentes/ServicesSection"
import WhyChooseUs from "../Componentes/WhyChooseUs"
import Footer from "../Componentes/Footer"
import "../Estilos/Home.css"

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main>
        <HeroSection />
        <VehicleSection />
        <CommercialVehicles />
        <ServicesSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default Home







