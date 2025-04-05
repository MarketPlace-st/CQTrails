import { XIcon } from "lucide-react";
import '../Estilos/auth.css';
import logo from "../Imagenes/Logo.svg";

function ForgotPasswordPopUp({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="auth-container">
        <div className="auth-background">
          <button className="close-button" onClick={onClose}>
            <XIcon size={25} />
          </button>

          <img
            className="auth-logo"
            alt="CQ TRAILS Logo"
            src={logo}
          />

          <div className="auth-card">
            <div>
              <h2 className="auth-title">¿Olvidaste tu contraseña?</h2>
              <p className="auth-subtitle">
                Ingresa tu correo electrónico para restablecer tu contraseña
              </p>

              <div>
                <div className="form-group">
                  <label className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    className="form-input"
                    placeholder="Dirección de correo electrónico"
                    type="email"
                  />
                </div>

                <button className="login-button">
                  Siguiente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPopUp; 