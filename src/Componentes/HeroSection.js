import "../Estilos/HeroSection.css"
import heroCar from "../Imagenes/hero-car.png"

function HeroSection() {
  return (
    <div className="hero-outer-container">
      <div className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Movilidad
              <br />
              <span className="hero-highlight">eficiente y segura</span>
              <br />
              para tu empresa
            </h1>
            <button className="btn btn-primary">¡Reserva ya!</button>
          </div>
          <div className="hero-image">
            <img src={heroCar || "/placeholder.svg"} alt="Vehículo de lujo" />
          </div>
        </div>

        <div className="search-container">
          <div className="search-form">
            <div className="search-select">
              <label>Marca</label>
              <div className="select-wrapper">
                <select defaultValue="Toyota">
                  <option value="Toyota">Toyota</option>
                  <option value="Lexus">Lexus</option>
                  <option value="Hyundai">Hyundai</option>
                </select>
                <svg
                  className="select-arrow"
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="search-select">
              <label>Modelo</label>
              <div className="select-wrapper">
                <select defaultValue="RAV4">
                  <option value="RAV4">RAV4</option>
                  <option value="Camry">Camry</option>
                  <option value="ES">ES</option>
                </select>
                <svg
                  className="select-arrow"
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="search-select">
              <label>Año</label>
              <div className="select-wrapper">
                <select defaultValue="2023">
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
                <svg
                  className="select-arrow"
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="search-input">
              <input type="text" placeholder="Buscar" />
              <button className="search-button">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection









