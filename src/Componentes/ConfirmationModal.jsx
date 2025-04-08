import React from 'react'
import '../Estilos/ConfirmationModal.css'

function ConfirmationModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "¿Estás seguro de que deseas completar esta reservación?",
  message = "Una vez confirmada, los detalles serán enviados para su procesamiento.",
  confirmText = "Estoy seguro",
  cancelText = "No estoy seguro"
}) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            {confirmText}
          </button>
          <button className="cancelmodals-button" onClick={onClose}>
            {cancelText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal 