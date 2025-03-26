"use client"

import { useState, useEffect } from "react"
import "../Estilos/Header.css"
import logo from "../Imagenes/Logo.svg"
import LoginPopUp from "./LoginPopUp"
import RegisterPopUp from "./RegisterPopUp"
import ForgotPasswordPopUp from "./ForgotPasswordPopUp"

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)

  const toggleDropdown = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen)
  }

  const closeDropdown = () => {
    setDropdownOpen(false)
  }

  const handleLoginClick = () => {
    setIsLoginOpen(true)
    setIsRegisterOpen(false)
    setIsForgotPasswordOpen(false)
  }

  const handleRegisterClick = () => {
    setIsRegisterOpen(true)
    setIsLoginOpen(false)
    setIsForgotPasswordOpen(false)
  }

  const handleForgotPasswordClick = () => {
    setIsForgotPasswordOpen(true)
    setIsLoginOpen(false)
    setIsRegisterOpen(false)
  }

  const handleCloseLogin = () => {
    setIsLoginOpen(false)
  }

  const handleCloseRegister = () => {
    setIsRegisterOpen(false)
  }

  const handleCloseForgotPassword = () => {
    setIsForgotPasswordOpen(false)
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
    <>
      <header className="header">
        <div className="container header-container">
          <div className="logo-container">
            <img src={logo || "/placeholder.svg"} alt="CQ TRAILS" className="logo" />
          </div>
          <nav className="navigation">
            <div className="nav-links">
              <div className="dropdown-container">
                <a href="#" className="nav-link dropdown-toggle" onClick={toggleDropdown}>
                  Reservaciones <span className="dropdown-arrow">{dropdownOpen ? "▲" : "▼"}</span>
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
            <button className="btn btn-login" onClick={handleLoginClick}>
              Iniciar Sesión
            </button>
            <button className="btn btn-register" onClick={handleRegisterClick}>
              Crear Cuenta
            </button>
          </div>
        </div>
      </header>
      <LoginPopUp 
        isOpen={isLoginOpen} 
        onClose={handleCloseLogin}
        onForgotPassword={handleForgotPasswordClick}
      />
      <RegisterPopUp 
        isOpen={isRegisterOpen} 
        onClose={handleCloseRegister}
        onSwitchToLogin={handleLoginClick}
      />
      <ForgotPasswordPopUp 
        isOpen={isForgotPasswordOpen} 
        onClose={handleCloseForgotPassword}
      />
    </>
  )
}

export default Header














