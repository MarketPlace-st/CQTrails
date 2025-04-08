"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderAuthenticated from "../../Componentes/HeaderAuthenticated"
import Footer from "../../Componentes/Footer"
import "./Perfil.css"
import { User, Edit, Lock, LogOut, Trash2, ChevronRight, ArrowRight } from "lucide-react"
import ConfirmationModal from "../../Componentes/Notificaciones/ConfirmationModal.jsx"
import LoginPopUp from "../../Componentes/Auth/LoginPopUp"

// Importar imágenes de vehículos
import furgoneta1 from "../../Imagenes/Furgoneta.png"
import furgoneta2 from "../../Imagenes/Camioneta.png"
import furgoneta3 from "../../Imagenes/Minibus.png"

// Mapeo de tipos de vehículos a imágenes
const vehicleImages = {
  "Furgoneta": furgoneta1,
  "Camioneta": furgoneta2,
  "Minibus": furgoneta3,
  "SUV": furgoneta2
}

export default function Perfil() {
  // Estado para manejar el modo de edición
  const [editMode, setEditMode] = useState(false)
  
  // Estado para el modal de confirmación de eliminar cuenta
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  // Estado para el modal de confirmación de cerrar sesión
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)

  // Estado para el modal de login
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Estado para los datos del usuario
  const [userData, setUserData] = useState({
    nombre: "Marco",
    apellido: "Polo",
    email: "marco.polo@ejemplo.com",
    telefono: "809-555-1234",
    direccion: "Santo Domingo, República Dominicana",
  })

  // Estado para almacenar los datos temporales durante la edición
  const [tempData, setTempData] = useState({ ...userData })

  // Datos de ejemplo para reservaciones recientes
  const reservacionesRecientes = [
    {
      id: "RES-2025-001",
      fecha: "20 de Julio de 2022",
      vehiculo: "Toyota Hiace",
      tipo: "Furgoneta",
      estado: "Aprobada",
      total: "$14.00",
    },
    {
      id: "RES-2025-002",
      fecha: "5 de Marzo de 2025",
      vehiculo: "Nissan GT-R",
      tipo: "Minibus",
      estado: "Pendiente",
      total: "$14.00",
    },
    {
      id: "RES-2024-003",
      fecha: "30 de Mayo de 2023",
      vehiculo: "Toyota RAV4",
      tipo: "SUV",
      estado: "Denegada",
      total: "$14.00",
    },
  ]

  // Función para obtener la clase del estado
  const getStatusClass = (estado) => {
    switch(estado.toLowerCase()) {
      case 'aprobada': return 'status-approved'
      case 'denegada': return 'status-denied'
      default: return 'status-pending'
    }
  }

  // Función para manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setTempData({
      ...tempData,
      [name]: value,
    })
  }

  // Función para guardar los cambios
  const handleSaveChanges = () => {
    setUserData({ ...tempData })
    setEditMode(false)
  }

  // Función para cancelar la edición
  const handleCancelEdit = () => {
    setTempData({ ...userData })
    setEditMode(false)
  }

  // Función para abrir el modal de eliminación de cuenta
  const handleDeleteClick = (e) => {
    e.preventDefault()
    setIsDeleteModalOpen(true)
  }
  
  // Función para abrir el modal de cierre de sesión
  const handleLogoutClick = (e) => {
    e.preventDefault()
    setIsLogoutModalOpen(true)
  }

  // Función para manejar el cierre de sesión
  const handleConfirmLogout = () => {
    // Eliminar el estado de autenticación del localStorage
    localStorage.removeItem("auth")
    // Redirigir a la página principal
    window.location.href = "/"
  }
  
  // Función para cancelar el cierre de sesión
  const handleCancelLogout = () => {
    setIsLogoutModalOpen(false)
  }

  // Función para confirmar la eliminación de cuenta
  const handleConfirmDelete = () => {
    // Cerrar el modal de confirmación y abrir el modal de login
    setIsDeleteModalOpen(false)
    setIsLoginModalOpen(true)
  }

  // Función para manejar el cierre del modal de login
  const handleLoginClose = () => {
    setIsLoginModalOpen(false)
  }

  // Función para manejar el login exitoso antes de eliminar la cuenta
  const handleLoginSuccess = () => {
    // Aquí iría la lógica para eliminar la cuenta después de verificar la identidad
    console.log("Identidad verificada, cuenta eliminada")
    setIsLoginModalOpen(false)
    // Redirigir al usuario a la página de inicio (o donde corresponda)
    window.location.href = "/"
  }

  // Función para manejar la recuperación de contraseña
  const handleForgotPassword = () => {
    setIsLoginModalOpen(false)
    // Aquí podría redirigir a una página de recuperación de contraseña
    console.log("Redirigir a recuperación de contraseña")
  }

  // Función para cancelar la eliminación de cuenta
  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false)
  }

  return (
    <div className="perfil-container">
      <HeaderAuthenticated />

      <div className="perfil-content">
        {/* Barra lateral */}
        <aside className="perfil-sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header">
              <User size={20} />
              <span>Gestionar Cuenta</span>
            </div>

            <div className="sidebar-menu">
              <Link to="/perfil" className="sidebar-item active">
                <Edit size={18} />
                <span>Editar Información Personal</span>
              </Link>
              <Link to="/cambiar-contrasena" className="sidebar-item">
                <Lock size={18} />
                <span>Cambiar Contraseña</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-section">
            <Link to="#" onClick={handleLogoutClick} className="sidebar-item">
              <LogOut size={18} />
              <span>Cerrar Sesión</span>
            </Link>
            <Link to="#" onClick={handleDeleteClick} className="sidebar-item delete">
              <Trash2 size={18} />
              <span>Eliminar Cuenta</span>
            </Link>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="perfil-main">
          {/* Banner del perfil */}
          <div className="perfil-hero">
            <div className="hero-content">
              <h1>
                {userData.nombre} {userData.apellido}
              </h1>
              <p>{userData.email}</p>
            </div>
          </div>

          {/* Secciones de información */}
          <div className="perfil-sections">
            {/* Información personal */}
            <section className="perfil-section">
              <div className="sectionperfil-header">
                <h2>Información personal</h2>
                {!editMode ? (
                  <button className="edit-button" onClick={() => setEditMode(true)}>
                    <Edit size={18} />
                    <span>Editar</span>
                  </button>
                ) : null}
              </div>
              <div className="section-content">
                {editMode ? (
                  <div className="edit-form">
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={tempData.nombre}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="apellido">Apellido</label>
                      <input
                        type="text"
                        id="apellido"
                        name="apellido"
                        value={tempData.apellido}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefono">Teléfono</label>
                      <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={tempData.telefono}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input type="email" id="email" name="email" value={tempData.email} onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="direccion">Dirección</label>
                      <input
                        type="text"
                        id="direccion"
                        name="direccion"
                        value={tempData.direccion}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-actions">
                      <button className="cancel-button" onClick={handleCancelEdit}>
                        Cancelar
                      </button>
                      <button className="save-button" onClick={handleSaveChanges}>
                        Guardar Cambios
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="info-grid">
                    <div className="info-row">
                      <div className="info-label">Nombre:</div>
                      <div className="info-value">{userData.nombre}</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Apellido:</div>
                      <div className="info-value">{userData.apellido}</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Teléfono:</div>
                      <div className="info-value">{userData.telefono}</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Correo Electrónico:</div>
                      <div className="info-value">{userData.email}</div>
                    </div>
                    <div className="info-row">
                      <div className="info-label">Dirección:</div>
                      <div className="info-value">{userData.direccion}</div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Historial de reservaciones */}
            <section className="perfil-section">
              <div className="sectionperfil-header">
                <h2>Historial de Reservaciones</h2>
                <Link to="/historial" className="ver-todas">
                  Ver todas
                </Link>
              </div>
              <div className="section-content">
                <div className="reservaciones-lista">
                  {reservacionesRecientes.map(reserva => (
                    <div className="reservacion-item" key={reserva.id}>
                      <div className="reservacion-info">
                        <div className="vehicle-cell">
                          <div className="vehicle-img-container">
                            <img src={vehicleImages[reserva.tipo]} alt={reserva.vehiculo} className="vehicle-thumbnail" />
                          </div>
                          <div className="vehicleperfil-info">
                            <div className="vehicle-name">{reserva.vehiculo}</div>
                            <div className="vehicle-type">{reserva.tipo}</div>
                          </div>
                        </div>
                        <div className="reservacion-fecha">{reserva.fecha}</div>
                        <div className="reservacion-detalles">
                          <div className="reservacion-total">{reserva.total}</div>
                          <span className={`status-badge ${getStatusClass(reserva.estado)}`}>
                            {reserva.estado}
                          </span>
                        </div>
                      </div>
                      <Link to={`/historial/${reserva.id}`} className="reservacion-arrow" aria-label="Ver detalles de reservación">
                        <ArrowRight size={20} strokeWidth={2.5} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal de confirmación para eliminar cuenta */}
      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        title="¿Estás seguro de que quiere eliminar su cuenta?"
        message="Esta acción no se puede deshacer. Todos sus datos serán eliminados permanentemente."
        confirmText="Estoy seguro"
        cancelText="No estoy seguro"
      />
      
      {/* Modal de confirmación para cerrar sesión */}
      <ConfirmationModal
        isOpen={isLogoutModalOpen}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
        title="¿Estás seguro de que desea cerrar sesión?"
        message="Tendrás que volver a iniciar sesión para acceder a tu cuenta."
        confirmText="Estoy seguro"
        cancelText="No estoy seguro"
      />

      {/* Modal de login para verificar identidad */}
      <LoginPopUp 
        isOpen={isLoginModalOpen}
        onClose={handleLoginClose}
        onLoginSuccess={handleLoginSuccess} 
        onForgotPassword={handleForgotPassword}
      />

      <Footer />
    </div>
  )
}











