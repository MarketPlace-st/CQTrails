import { XIcon } from "lucide-react";
import '../Estilos/auth.css';
import logo from "../Imagenes/Logo.svg";

function RegisterPopUp({ isOpen, onClose, onSwitchToLogin }) {
  if (!isOpen) return null;

  const handleLoginClick = () => {
    onClose();
    onSwitchToLogin();
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
              <h2 className="auth-title">Crea tu cuenta</h2>

              <div>
                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">
                      Nombre
                    </label>
                    <input
                      className="form-input"
                      placeholder="Tu primer nombre"
                      type="text"
                    />
                  </div>
                  <div className="form-group half">
                    <label className="form-label">
                      Apellido
                    </label>
                    <input
                      className="form-input"
                      placeholder="Tu apellido"
                      type="text"
                    />
                  </div>
                </div>

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

                <div className="form-row">
                  <div className="form-group half">
                    <label className="form-label">
                      Contraseña
                    </label>
                    <input
                      className="form-input"
                      placeholder="Tu contraseña"
                      type="password"
                    />
                  </div>
                  <div className="form-group half">
                    <label className="form-label">
                      Confirmar contraseña
                    </label>
                    <input
                      className="form-input"
                      placeholder="Confirmar tu contraseña"
                      type="password"
                    />
                  </div>
                </div>

                <div className="terms-container">
                  <label className="terms-label">
                    <input type="checkbox" className="terms-checkbox" />
                    <span>Acepto los </span>
                    <a href="#" className="terms-link">términos y condiciones</a>
                  </label>
                </div>

                <button className="login-button">
                  Registrate
                </button>

                <div className="login-link-container">
                  <span className="login-text">
                    ¿Ya tienes una cuenta?
                  </span>
                  <a className="login-link" onClick={handleLoginClick}>
                    Inicia Sesión
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

export default RegisterPopUp; 