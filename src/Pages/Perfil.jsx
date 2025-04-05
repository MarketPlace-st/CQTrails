"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderAuthenticated from "../Componentes/HeaderAuthenticated"
import Footer from "../Componentes/Footer"
import "../Estilos/Perfil.css"
import { User, Edit, Lock, LogOut, Trash2, ChevronRight, Car } from "lucide-react"

export default function Perfil() {
  // Estado para manejar el modo de edición
  const [editMode, setEditMode] = useState(false)

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
      fecha: "20/07/2025",
      vehiculo: "Koenigsegg Toyota",
      tipo: "Furgoneta",
      estado: "En Proceso",
      total: "$84.00",
    },
    {
      id: "RES-2025-002",
      fecha: "15/06/2025",
      vehiculo: "Nissan GT-R",
      tipo: "Minibus",
      estado: "Validación",
      total: "$120.00",
    },
    {
      id: "RES-2024-003",
      fecha: "10/05/2025",
      vehiculo: "Toyota RAV4",
      tipo: "SUV",
      estado: "Procesada",
      total: "$65.00",
    },
  ]

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
              <Link to="/desactivar-cuenta" className="sidebar-item">
                <User size={18} />
                <span>Desactivar Cuenta</span>
              </Link>
            </div>
          </div>

          <div className="sidebar-section">
            <Link to="/cerrar-sesion" className="sidebar-item">
              <LogOut size={18} />
              <span>Cerrar Sesión</span>
            </Link>
            <Link to="/eliminar-cuenta" className="sidebar-item delete">
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
              <div className="section-header">
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
              <div className="section-header">
                <h2>Historial de Reservaciones</h2>
                <Link to="/historial" className="ver-todas">
                  Ver todas
                </Link>
              </div>
              <div className="section-content">
                <div className="reservations-table">
                  {reservacionesRecientes.map((reserva) => (
                    <Link to={`/detalles-reservacion/${reserva.id}`} key={reserva.id} className="reservation-row">
                      <div className="reservation-icon">
                        <Car size={20} />
                      </div>
                      <div className="reservation-info">
                        <div className="reservation-date">
                          <span>Fecha</span>
                          <strong>{reserva.fecha}</strong>
                        </div>
                        <div className="reservation-vehicle">
                          <span>Vehículo</span>
                          <strong>{reserva.tipo}</strong>
                        </div>
                        <div className="reservation-status">
                          <span>Estado</span>
                          <strong className={reserva.estado.replace(/\s+/g, "-").toLowerCase()}>
                            {reserva.estado}
                          </strong>
                        </div>
                      </div>
                      <div className="reservation-action">
                        <ChevronRight size={20} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}











