import React from 'react'
import "../Estilos/TotalSummary.css"

function TotalSummary({ subtotal, total }) {
  const iva = (parseFloat(subtotal) * 0.13).toFixed(2) // 13% IVA

  return (
    <div className="total-summary">
      <h2>Total de Vehículos</h2>
      
      <div className="summary-details">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="summary-row">
          <span>IVA (13%)</span>
          <span>${iva}</span>
        </div>
        <div className="summary-row total">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  )
}

export default TotalSummary 