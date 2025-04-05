import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../Estilos/CartPreview.css"

const CartPreview = ({ isVisible }) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Actualizar los items del carrito cuando el componente se monte o el carrito cambie
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || []
      setCartItems(cart)
    }

    updateCart()
    // Escuchar cambios en el localStorage
    window.addEventListener('storage', updateCart)
    
    return () => {
      window.removeEventListener('storage', updateCart)
    }
  }, [])

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.subtotal), 0).toFixed(2)
  }

  if (!isVisible) return null

  return (
    <div className="cart-preview">
      <div className="cart-preview-header">
        <span>Carrito ({cartItems.length})</span>
      </div>
      <div className="cart-preview-items">
        {cartItems.map((item) => (
          <div key={item.id} className="preview-item">
            <img src={item.imagen} alt={item.vehiculo} className="preview-item-image" />
            <div className="preview-item-details">
              <h4>{item.vehiculo}</h4>
              <p className="preview-item-type">{item.tipo}</p>
              <div className="preview-item-price">
                <span>${item.precio}</span>
                <span className="preview-item-quantity">Cantidad: {item.cantidad}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-preview-footer">
        <div className="preview-subtotal">
          <span>Subtotal</span>
          <span>${calculateTotal()}</span>
        </div>
        <Link to="/micarrito" className="view-cart-button">
          Ver Carrito
        </Link>
      </div>
    </div>
  )
}

export default CartPreview 