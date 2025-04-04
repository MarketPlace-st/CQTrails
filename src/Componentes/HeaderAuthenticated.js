"use client"

import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import CartPreview from './CartPreview'
import "../Estilos/HeaderAuthenticated.css"
import logo from "../Imagenes/Logo.svg"
import { ChevronDown, Car, User } from "lucide-react"

function HeaderAuthenticated() {
  const [showCartPreview, setShowCartPreview] = useState(false)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(savedCart)
  }, [])

  return (
    <div className="header-auth">
      <div className="header-auth-container">
        <Link to="/home-auth" className="header-auth-logo">
          <img src={logo} alt="Logo" className="header-auth-logo" />
        </Link>
        
        <div className="header-auth-right">
          <nav className="header-auth-nav">
            <div className="header-auth-dropdown">
              <button className="header-auth-dropdown-toggle">
                Reservaciones
                <ChevronDown size={20} />
              </button>
              <div className="header-auth-dropdown-menu">
                <Link to="/reservar" className="header-auth-dropdown-item">
                  Reservar
                </Link>
                <Link to="/historial" className="header-auth-dropdown-item">
                  Mis Reservaciones
                </Link>
              </div>
            </div>
            <Link to="/contacto" className="header-auth-contact">
              Contacto
            </Link>
          </nav>
          
          <div className="header-auth-icons">
            <div className="cartheader-container"
                 onMouseEnter={() => setShowCartPreview(true)}
                 onMouseLeave={() => setShowCartPreview(false)}>
              <Link to="/micarrito" className="cart-link">
                <Car size={24} />
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </Link>
              <CartPreview items={cartItems} isVisible={showCartPreview} />
            </div>
            <div className="profile-container">
              <Link to="/perfil" className="profile-link">
                <User size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderAuthenticated



















