import { useState, useEffect } from "react"
import Header from "../../Componentes/Header"
import HeaderAuthenticated from "../../Componentes/HeaderAuthenticated"
import HeroSection from "./ComponentesHome/HeroSection"
import VehicleSection from "./ComponentesHome/VehicleSection"
import CommercialVehicles from "./ComponentesHome/CommercialVehicle"
import ServicesSection from "./ComponentesHome/ServicesSection"
import WhyChooseUs from "./ComponentesHome/WhyChooseUs"
import Footer from "../../Componentes/Footer"
import "./Home.css"

function Home() {
  const isAuthenticated = localStorage.getItem("auth") === "true"

  return (
    <div className="home-page">
      {isAuthenticated ? <HeaderAuthenticated /> : <Header />}
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









