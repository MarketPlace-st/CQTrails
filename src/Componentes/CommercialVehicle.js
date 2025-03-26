import "../Estilos/CommercialVehicles.css"

// Importamos las imágenes de los vehículos
import renaultPremium from "../Imagenes/CamionsinCaja.png" 
import volvoFH from "../Imagenes/CamionLarge.png" 

// Importamos los logos de las marcas
import renaultLogo from "../Imagenes/Logo Renault.png" 
import volvoLogo from "../Imagenes/Logo Volvo.png" 

function CommercialVehicles() {
  return (
    <section className="commercial-section">
      <div className="commercial-container">
        <div className="section-header">
          <h2 className="commercialVehicle-title">Vehículos Comerciales</h2>
          <a href="#mas-comerciales" className="view-more">
            Ver más{" "}
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>

        <div className="commercial-grid">
          <div className="commercial-card">
            <div className="card-content">
              <img src={renaultLogo || "/placeholder.svg"} alt="Renault" className="brand-logo" />
              <h3 className="commercial-brand">
                Renault
                <br />
                Premium
              </h3>
              <div className="price-badge">$ 36 000</div>
            </div>
            <div className="commercial-image">
              <img src={renaultPremium || "/placeholder.svg"} alt="Renault Premium" />
            </div>
          </div>

          <div className="commercial-card">
            <div className="card-content">
              <img src={volvoLogo || "/placeholder.svg"} alt="Volvo" className="brand-logo" />
              <h3 className="commercial-brand">
                Volvo
                <br />
                FH
              </h3>
              <div className="price-badge">$ 24 000</div>
            </div>
            <div className="commercial-image">
              <img src={volvoFH || "/placeholder.svg"} alt="Volvo FH" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommercialVehicles



