import "../Estilos/Footer.css"
import logoNegativo from "../Imagenes/Logo Negativo.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img src={logoNegativo || "/placeholder.svg"} alt="CQ TRAILS" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Conócenos</h4>
            <ul>
              <li>
                <a href="#nosotros">Nosotros</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Servicios</h4>
            <ul>
              <li>
                <a href="#alquiler">Reserva de Vehículos</a>
              </li>
              <li>
                <a href="#logistica">Logística</a>
              </li>
              <li>
                <a href="#empresas">Soluciones Empresariales</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Ayuda</h4>
            <ul>
              <li>
                <a href="#faq">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
              <li>
                <a href="#soporte">Soporte</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="#twitter" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#instagram" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#facebook" className="social-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>ALL RIGHTS RESERVED. COPYRIGHT 2025</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


