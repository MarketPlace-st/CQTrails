"use client"

import { useState, useEffect } from "react"
import "../Estilos/Header.css"
import logo from "../Imagenes/Logo.png"

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        closeDropdown()
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <img src={logo || "/placeholder.svg"} alt="CQ TRAILS" className="logo" />
        </div>
        <div className="right-section">
          <nav className="navigation">
            <div className="nav-links">
              <div className="dropdown-container">
                <a href="#" className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                  Reservaciones
                  <span className="dropdown-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={dropdownOpen ? "rotate-arrow" : ""}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </a>
                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <a href="#reservar" className="dropdown-item">
                      Reservar
                    </a>
                    <a href="#historial" className="dropdown-item">
                      Historial de Reservaciones
                    </a>
                  </div>
                )}
              </div>
              <a href="#contacto" className="nav-link">
                Contacto
              </a>
            </div>
          </nav>
          <div className="auth-buttons">
            <button className="btn btn-login">Iniciar Sesión</button>
            <button className="btn btn-register">Crear Cuenta</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
















