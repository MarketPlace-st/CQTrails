import React from 'react'
import './ConfirmationModal.css' 

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¡Reservación procesada <span className="success-text">exitosamente</span>!</h2>
        <p>En un plazo máximo de 24 horas podrá visualizar el estado de su reservación y pre-factura desde el historial de reservaciones.</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onClose}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal 