import { XIcon } from "lucide-react";
import '../Estilos/auth.css';
import logo from "../Imagenes/Logo.svg";

function LoginPopUp({ isOpen, onClose, onForgotPassword }) {
  if (!isOpen) return null;

  const handleForgotPassword = () => {
    onClose();
    onForgotPassword();
  };

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
              <h2 className="auth-title">Iniciar Sesión</h2>

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

                <div className="form-group">
                  <label className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="Tu contraseña"
                  />
                </div>

                <button className="login-button">
                  Ingresar
                </button>

                <div className="login-link-container">
                  <p className="forgot-password-text">
                    ¿Olvidaste tu Contraseña? 
                  </p>
                  <a className="forgot-password-link" onClick={handleForgotPassword}>
                    Recuperar Contraseña
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopUp;