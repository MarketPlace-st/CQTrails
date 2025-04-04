import "../Estilos/HeroSection.css"
import heroCar from "../Imagenes/hero-car.png"
import React from 'react'

const HeroSection = ({ vehicles = [] }) => {
  return (
    <section className="cq-hero">
      <div className="cq-hero__container">
        <div className="cq-hero__content">
          <h1 className="cq-hero__title">
            Movilidad
            <br />
            <span className="cq-hero__title-highlight">eficiente y segura</span>
            <br />
            para tu empresa
          </h1>
          <button className="cq-hero__cta-button">¡Reserva ya!</button>
        </div>
        
        <div className="cq-hero__image-wrapper">
          <img src={heroCar} alt="Vehículo de lujo" className="cq-hero__image" />
        </div>
      </div>

      <div className="cq-hero__search">
        <form className="cq-hero__search-form">
          <div className="cq-hero__search-field">
            <label className="cq-hero__search-label">Marca</label>
            <div className="cq-hero__select-wrapper">
              <select className="cq-hero__select" defaultValue="Toyota">
                <option value="Toyota">Toyota</option>
                <option value="Lexus">Lexus</option>
                <option value="Hyundai">Hyundai</option>
              </select>
              <svg
                className="cq-hero__select-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div className="cq-hero__search-field">
            <label className="cq-hero__search-label">Modelo</label>
            <div className="cq-hero__select-wrapper">
              <select className="cq-hero__select" defaultValue="RAV4">
                <option value="RAV4">RAV4</option>
                <option value="Camry">Camry</option>
                <option value="ES">ES</option>
              </select>
              <svg
                className="cq-hero__select-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div className="cq-hero__search-field">
            <label className="cq-hero__search-label">Año</label>
            <div className="cq-hero__select-wrapper">
              <select className="cq-hero__select" defaultValue="2023">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
              <svg
                className="cq-hero__select-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          <div className="cq-hero__search-field cq-hero__search-field--with-button">
            <input 
              type="text" 
              placeholder="Buscar" 
              className="cq-hero__search-input"
            />
            <button type="submit" className="cq-hero__search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default HeroSection









