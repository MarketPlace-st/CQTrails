import { Link } from "react-router-dom"
import "../Estilos/ServicesSection.css"

// Importación de imágenes
import vehiculosSegurosImg from "../Imagenes/Rectangle 27.png"
import gestionReservasImg from "../Imagenes/Rectangle 28.png"
import logisticaFlotaImg from "../Imagenes/Rectangle 29.png"
import vehiculosLimpiosImg from "../Imagenes/Rectangle 30.png"

function ServicesSection() {
    return (
      <div className="servicios-section">
        {/* Primera columna: Título y texto */}
        <div className="columna-info">
          <h2>Nuestros Servicios</h2>
          <p>
            En CQTrails encuentras una amplia gama de soluciones de transporte para cualquier necesidad empresarial.
            Accede a servicios de transporte directo, sin intermediarios.
          </p>
  
          {/* Tarjeta Vehículos Seguros */}
          <div className="servicio-card">
            <img src={vehiculosSegurosImg || "/placeholder.svg"} alt="Vehículos Seguros" />
            <div className="servicio-label">
              <span>Vehículos Seguros</span>
            </div>
          </div>
        </div>
  
        {/* Segunda columna: Gestión de Reservas */}
        <div className="columna-central">
          <div className="servicio-card card-alta">
            <img src={gestionReservasImg || "/placeholder.svg"} alt="Gestión de Reservas" />
            <div className="servicio-label">
              <span>Gestión de Reservas</span>
            </div>
          </div>
        </div>
  
        {/* Tercera columna: Logística de Flota y Vehículos Limpios */}
        <div className="columna-derecha">
          <div className="servicio-card">
            <img src={logisticaFlotaImg || "/placeholder.svg"} alt="Logística de Flota" />
            <div className="servicio-label">
              <span>Logística de Flota</span>
            </div>
          </div>
  
          <div className="servicio-card">
            <img src={vehiculosLimpiosImg || "/placeholder.svg"} alt="Vehículos Limpios" />
            <div className="servicio-label">
              <span>Vehículos Limpios</span>
            </div>
          </div>
  
          <div className="contactanos-link">
            <Link to="/contacto">
              Contáctanos <span className="arrow">›</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default ServicesSection





