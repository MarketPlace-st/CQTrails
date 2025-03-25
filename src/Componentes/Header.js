import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Logo from "../Imagenes/Logo.png";
import "../Estilos/Header.css";

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-section">
          <img src={Logo} alt="Logo CQ" className="logo-img" />
        </div>

        {/* Desktop Nav */}
        <nav className="nav">
          <div className="dropdown" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="nav-button"
            >
              Reservaciones
              <ChevronDown
                size={16}
                className={`chevron ${dropdownOpen ? "rotate" : ""}`}
              />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <a href="/historial-reservaciones" className="dropdown-item">
                  Historial de Reservaciones
                </a>
              </div>
            )}
          </div>

          <a href="/contacto" className="nav-link">
            Contacto
          </a>
        </nav>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn login">Iniciar Sesión</button>
          <button className="btn signup">Crear Cuenta</button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu" ref={mobileRef}>
          <a href="/historial-reservaciones" className="dropdown-item">
            Historial de Reservaciones
          </a>
          <a href="/contacto" className="dropdown-item">
            Contacto
          </a>
          <button className="btn login">Iniciar Sesión</button>
          <button className="btn signup">Crear Cuenta</button>
        </div>
      )}
    </header>
  );
}


