import { useNavigate } from "react-router-dom"
import "../Estilos/VehicleGrid.css"
import { Fuel, Users, Settings } from "lucide-react"

const VehicleGrid = ({ vehicles }) => {
  const navigate = useNavigate()

  const handleReserveClick = (vehicle) => {
    // Guardar el vehículo seleccionado en localStorage para mantener los datos
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle))
    navigate(`/agregar-reserva/${vehicle.id}`)
  }

  return (
    <div className="vehicle-grid">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicle-card">
          <div className="vehicle-info">
            <div className="vehicle-header">
              <h3>{vehicle.brand}</h3>
              <span className="vehicle-year">{vehicle.year}</span>
            </div>
            <p className="vehicle-type">{vehicle.type}</p>
          </div>

          <div className="vehicle-image-container">
            <img src={vehicle.image} alt={vehicle.brand} />
          </div>

          <div className="vehicle-details">
            <div className="detail-item">
              <Users size={18} />
              <span>{vehicle.seats} People</span>
            </div>
            <div className="detail-item">
              <Settings size={18} />
              <span className="transmission-badge">Manual</span>
            </div>
            <div className="detail-item">
              <Fuel size={18} />
              <span>{vehicle.fuel}</span>
            </div>
          </div>

          <div className="vehicle-footer">
            <div className="price">
              <span className="amount">${vehicle.price.toFixed(2)}</span>
              <span className="period">/día</span>
            </div>
            <button 
              className="reserve-button"
              onClick={() => handleReserveClick(vehicle)}
            >
              Reservar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VehicleGrid







