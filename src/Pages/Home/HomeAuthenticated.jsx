import React from 'react'
import HeaderAuthenticated from '../../Componentes/HeaderAuthenticated'
import HeroSection from './ComponentesHome/HeroSection'
import VehicleSection from './ComponentesHome/VehicleSection'
import CommercialVehicles from "./ComponentesHome/CommercialVehicle"
import ServicesSection from "./ComponentesHome/ServicesSection"
import WhyChooseUs from "./ComponentesHome/WhyChooseUs"
import Footer from "../../Componentes/Footer"
import "./Home.css"
import { useNavigate } from 'react-router-dom'

function HomeAuthenticated() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("auth")
    navigate("/")
  }

  return (
    <div className="home-page">
      <HeaderAuthenticated onLogout={handleLogout} />
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

export default HomeAuthenticated

