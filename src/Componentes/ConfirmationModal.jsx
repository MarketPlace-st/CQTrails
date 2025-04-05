import React from 'react'
import '../Estilos/ConfirmationModal.css'

function ConfirmationModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>¿Estás seguro de que deseas completar esta reservación?</h2>
        <p>Una vez confirmada, los detalles serán enviados para su procesamiento.</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Estoy seguro
          </button>
          <button className="cancel-button" onClick={onClose}>
            No estoy seguro
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal 