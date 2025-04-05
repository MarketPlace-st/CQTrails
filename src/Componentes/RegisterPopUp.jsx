import { useState } from "react"
import { XIcon, Eye, EyeOff } from "lucide-react"
import "../Estilos/auth.css"
import logo from "../Imagenes/Logo.svg"

function RegisterPopUp({ isOpen, onClose, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors = {}
    
    // Validación nombre completo
    if (!formData.fullName.trim()) {
      newErrors.fullName = "El nombre es requerido"
    } else if (formData.fullName.length < 3) {
      newErrors.fullName = "El nombre debe tener al menos 3 caracteres"
    }

    // Validación nombre de empresa
    if (!formData.companyName.trim()) {
      newErrors.companyName = "El nombre de la empresa es requerido"
    }

    // Validación teléfono
    const phoneRegex = /^\d{10}$/
    if (!formData.phone) {
      newErrors.phone = "El teléfono es requerido"
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Ingrese un número de teléfono válido (10 dígitos)"
    }

    // Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = "El email es requerido"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    // Validación contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida"
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }))
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onClose()
      onSwitchToLogin()
    }
  }

  return (
    <div className="popup-overlay">
      <div className="auth-container">
        <div className="auth-background">
          <button className="close-button" onClick={onClose}>
            <XIcon size={25} />
          </button>

          <img className="auth-logo" alt="CQ TRAILS Logo" src={logo} />

          <div className="auth-card">
            <h2 className="auth-title">Crear Cuenta</h2>
            <p className="auth-subtitle">Completa tus datos para comenzar</p>

            <form onSubmit={handleRegister}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Nombre Completo</label>
                  <input 
                    className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Tu nombre completo" 
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Nombre de Empresa</label>
                  <input 
                    className={`form-input ${errors.companyName ? 'input-error' : ''}`}
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa" 
                  />
                  {errors.companyName && <span className="error-message">{errors.companyName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Teléfono</label>
                  <input 
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Número de teléfono" 
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Correo Electrónico</label>
                  <input 
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Dirección de correo" 
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Contraseña</label>
                  <div className="password-input-container">
                    <input 
                      className={`form-input ${errors.password ? 'input-error' : ''}`}
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Crea una contraseña" 
                    />
                    <button 
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
              </div>

              <button type="submit" className="auth-button">
                Crear Cuenta
              </button>
            </form>

            <div className="auth-footer">
              <p>¿Ya tienes cuenta?</p>
              <button className="auth-link" onClick={onSwitchToLogin}>
                Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPopUp
