import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { XIcon, Eye, EyeOff } from "lucide-react";
import "../Estilos/auth.css";
import logo from "../Imagenes/Logo.svg";

function LoginPopUp({ isOpen, onClose, onForgotPassword, onLoginSuccess }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};
    
    // Validación email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "El email es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    // Validación contraseña
    if (!formData.password) {
      newErrors.password = "La contraseña es requerida";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("auth", "true");
      
      // Si existe un callback de login exitoso, ejecutarlo
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        onClose();
        navigate("/home-auth");
      }
    }
  };

  return (
    <div className="popup-overlay">
      <div className="auth-container">
        <div className="auth-background">
          <button className="close-button" onClick={onClose}>
            <XIcon size={25} />
          </button>

          <img className="auth-logo" alt="CQ TRAILS Logo" src={logo} />

          <div className="auth-card">
            <h2 className="auth-title">Iniciar Sesión</h2>

            <form onSubmit={handleLogin}>
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
                    placeholder="Tu contraseña" 
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

              <button type="submit" className="login-button">
                Ingresar
              </button>
            </form>

            <div className="login-link-container">
              <p className="forgot-password-text">¿Olvidaste tu Contraseña?</p>
              <button className="forgot-password-link" onClick={onForgotPassword}>
                Recuperar Contraseña
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopUp;

