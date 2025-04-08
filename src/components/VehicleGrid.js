import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LoginPopUp from "./LoginPopUp"
import "./VehicleGrid.css"

const VehicleGrid = ({ vehicles }) => {
  const navigate = useNavigate()
  const [showLoginPopup, setShowLoginPopup] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState(null)
  const isAuthenticated = localStorage.getItem("auth") === "true"

  const handleReserveClick = (vehicle) => {
    if (!isAuthenticated) {
      setSelectedVehicle(vehicle)
      setShowLoginPopup(true)
      return
    }
    navigate(`/agregar-reserva/${vehicle.id}`)
  }

  const handleLoginSuccess = () => {
    if (selectedVehicle) {
      navigate(`/agregar-reserva/${selectedVehicle.id}`)
    }
  }

  return (
    <div className="vehicle-grid">
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} className="vehicle-card">
          <img src={vehicle.image} alt={vehicle.name} />
          <h3>{vehicle.name}</h3>
          <p>{vehicle.description}</p>
          <button onClick={() => handleReserveClick(vehicle)}>Reservar</button>
        </div>
      ))}
      {showLoginPopup && (
        <LoginPopUp
          onClose={() => setShowLoginPopup(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  )
}

export default VehicleGrid 