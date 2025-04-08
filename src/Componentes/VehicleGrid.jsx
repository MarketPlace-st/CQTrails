import { useNavigate } from "react-router-dom"
import "../Estilos/VehicleGrid.css"
import { Fuel, Users, Settings } from "lucide-react"
import { useState } from "react"
import LoginPopUp from "./LoginPopUp"

const VehicleGrid = ({ vehicles }) => {
  const navigate = useNavigate()
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const isAuthenticated = localStorage.getItem("auth") === "true"

  const handleReserveClick = (vehicle) => {
    if (!isAuthenticated) {
      // Guardar el vehículo seleccionado en localStorage
      localStorage.setItem('selectedVehicle', JSON.stringify(vehicle))
      // Guardar el vehículo seleccionado en el estado
      setSelectedVehicle(vehicle)
      // Abrir el popup de login
      setIsLoginOpen(true)
      return
    }
    
    // Si está autenticado, proceder con la acción de agregar al carrito
    localStorage.setItem('selectedVehicle', JSON.stringify(vehicle))
    navigate(`/agregar-reserva/${vehicle.id}`)
  }

  const handleLoginSuccess = () => {
    setIsLoginOpen(false)
    // Si hay un vehículo seleccionado, navegar a la página de agregar reserva
    if (selectedVehicle) {
      navigate(`/agregar-reserva/${selectedVehicle.id}`)
    }
  }

  return (
    <>
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

      <LoginPopUp 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  )
}

export default VehicleGrid







