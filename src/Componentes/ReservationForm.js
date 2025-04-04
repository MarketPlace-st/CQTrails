import { useState } from "react"
import { useNavigate } from "react-router-dom"
import DatePicker, { registerLocale } from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import "../Estilos/ReservationForm.css"
import es from 'date-fns/locale/es'

registerLocale('es', es)

export default function ReservationForm({ price, onSubmit }) {
  /* eslint-disable-next-line no-unused-vars */
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    startDate: new Date(),
    startTime: "08:00 AM",
    endDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endTime: "08:00 AM",
    quantity: 1
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [startCity, setStartCity] = useState("Ciudad Central")
  const [endCity, setEndCity] = useState("Pista Semarang")

  const handleDateChange = (date, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: date
    }))
  }

  const handleTimeChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name === "startTime" ? "startTime" : "endTime"]: value
    }))
  }

  const handleQuantityChange = (increment) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + increment)
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Formatear los datos antes de enviarlos
    const formattedData = {
      startDate: formData.startDate,
      startTime: formData.startTime,
      endDate: formData.endDate,
      endTime: formData.endTime,
      quantity: formData.quantity
    }

    // Llamar a la función onSubmit que contiene la lógica del SweetAlert
    onSubmit(formattedData)
  }

  // City options
  const cityOptions = [
    { value: "Ciudad Central", label: "Ciudad Central" },
    { value: "Pista Semarang", label: "Pista Semarang" },
    { value: "San José", label: "San José" },
    { value: "Cartago", label: "Cartago" },
    { value: "Alajuela", label: "Alajuela" },
    { value: "Heredia", label: "Heredia" },
    { value: "Limón", label: "Limón" },
    { value: "Puntarenas", label: "Puntarenas" },
  ]

  // Time options
  const timeOptions = [
    { value: "08:00 AM", label: "08:00 AM" },
    { value: "09:00 AM", label: "09:00 AM" },
    { value: "10:00 AM", label: "10:00 AM" },
    { value: "11:00 AM", label: "11:00 AM" },
    { value: "12:00 PM", label: "12:00 PM" },
    { value: "01:00 PM", label: "01:00 PM" },
    { value: "02:00 PM", label: "02:00 PM" },
    { value: "03:00 PM", label: "03:00 PM" },
    { value: "04:00 PM", label: "04:00 PM" },
    { value: "05:00 PM", label: "05:00 PM" },
  ]

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="form-section">
        <div className="date-section">
          <div className="date-column">
            <h3 className="section-title">Inicio</h3>
            <div className="date-time-inputs">
              {/* City Dropdown */}
              <div className="selector-container">
                <label className="selector-label">Ciudad</label>
                <div className="selector-wrapper">
                  <select className="selector-input" value={startCity} onChange={(e) => setStartCity(e.target.value)}>
                    {cityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="selector-icon">
                    <svg
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="date-time-row">
                <div className="selector-container">
                  <label className="selector-label">Fecha Inicio</label>
                  <div className="date-picker-wrapper">
                    <DatePicker
                      selected={formData.startDate}
                      onChange={(date) => handleDateChange(date, 'startDate')}
                      dateFormat="dd/MM/yyyy"
                      minDate={new Date()}
                      locale="es"
                      className="selector-input date-input"
                      popperClassName="date-picker-popper"
                      popperPlacement="bottom-start"
                    />
                    <div className="selector-icon">
                      <svg
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Start Time Selector */}
                <div className="selector-container">
                  <label className="selector-label">Hora Inicio</label>
                  <div className="selector-wrapper">
                    <select 
                      name="startTime"
                      className="selector-input" 
                      value={formData.startTime} 
                      onChange={handleTimeChange}
                    >
                      {timeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="selector-icon">
                      <svg
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="date-column">
            <h3 className="section-title">Fin</h3>
            <div className="date-time-inputs">
              {/* End City Dropdown */}
              <div className="selector-container">
                <label className="selector-label">Ciudad</label>
                <div className="selector-wrapper">
                  <select className="selector-input" value={endCity} onChange={(e) => setEndCity(e.target.value)}>
                    {cityOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <div className="selector-icon">
                    <svg
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="date-time-row">
                <div className="selector-container">
                  <label className="selector-label">Fecha Final</label>
                  <div className="date-picker-wrapper">
                    <DatePicker
                      selected={formData.endDate}
                      onChange={(date) => handleDateChange(date, 'endDate')}
                      dateFormat="dd/MM/yyyy"
                      minDate={formData.startDate}
                      locale="es"
                      className="selector-input date-input"
                      popperClassName="date-picker-popper"
                      popperPlacement="bottom-start"
                    />
                    <div className="selector-icon">
                      <svg
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* End Time Selector */}
                <div className="selector-container">
                  <label className="selector-label">Hora Final</label>
                  <div className="selector-wrapper">
                    <select className="selector-input" value={formData.endTime} onChange={handleTimeChange}>
                      {timeOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <div className="selector-icon">
                      <svg
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="quantity-section">
          <h3 className="section-title">Cantidad de Vehículos</h3>
          <div className="quantity-control-container">
            <div className="quantity-control">
              <button
                type="button"
                className="quantity-button decrease"
                onClick={() => handleQuantityChange(-1)}
                disabled={formData.quantity <= 1}
                aria-label="Disminuir cantidad"
              >
                -
              </button>
              <span className="quantity-value">{formData.quantity}</span>
              <button
                type="button"
                className="quantity-button increase"
                onClick={() => handleQuantityChange(1)}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="price-section">
        <div className="price-display">
          <span className="price-amount">${price.toFixed(2)}</span>
          <span className="price-period">/ día</span>
        </div>
        <button type="submit" className="agregar-button">
          Agregar
        </button>
      </div>

      {showSuccess && (
        <div className="success-message">
          ¡Vehículo agregado al carrito exitosamente!
        </div>
      )}
    </form>
  )
}













