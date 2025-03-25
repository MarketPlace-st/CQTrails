import "../Estilos/Footer.css";
import Logo from "../Imagenes/Logo Negativo.png";
import { FaTelegramPlane, FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={Logo} alt="Logo CQ" className="logo-footer" />
        </div>

        <div className="footer-links">
          <p>Contáctanos</p>
          <p>Servicios</p>
          <p>Ayuda</p>
        </div>

        <div className="footer-icons">
          <FaTelegramPlane className="icon" />
          <FaWhatsapp className="icon" />
          <FaInstagram className="icon" />
          <FaFacebookF className="icon" />
        </div>
      </div>

      <hr className="footer-line" />

      <p className="footer-copy">ALL RIGHTS RESERVED. COPYRIGHT 2023</p>
    </footer>
  );
}
