import { useState } from "react"
import { Link } from "react-router-dom"
import HeaderAuthenticated from "../../Componentes/HeaderAuthenticated"
import Footer from "../../Componentes/Footer"
import "./Perfil.css"
import { User, Edit, Lock, LogOut, Trash2, Eye, EyeOff } from "lucide-react"
import ConfirmationModal from "../../Componentes/Notificaciones/ConfirmationModal.jsx"
import LoginPopUp from "../../Componentes/Auth/LoginPopUp"

export default function CambiarContrasena() {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  // Estado para mostrar/ocultar contraseñas
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  
  // Estado para mensajes de error/éxito
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")

  // Estado para el modal de confirmación de eliminar cuenta
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  // Estado para el modal de confirmación de cerrar sesión
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false)
  
  // Estado para el modal de login
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  // Datos del usuario
  const userData = {
    nombre: "Marco",
    apellido: "Polo",
    email: "marco.polo@ejemplo.com"
  }

  // Función para manejar el cambio en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Reiniciar mensajes de error al cambiar los campos
    setErrorMessage("")
    setSuccessMessage("")
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

  // Función para validar el formulario
  const validateForm = () => {
    // Verificar que todos los campos estén completos
    if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
      setErrorMessage("Todos los campos son obligatorios")
      return false
    }

    // Verificar que la nueva contraseña tenga al menos 8 caracteres
    if (formData.newPassword.length < 8) {
      setErrorMessage("La nueva contraseña debe tener al menos 8 caracteres")
      return false
    }

    // Verificar que la nueva contraseña y la confirmación coincidan
    if (formData.newPassword !== formData.confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden")
      return false
    }

    return true
  }

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar el formulario
    if (!validateForm()) {
      return
    }

    // Simular validación de contraseña actual (en producción, esto se haría con una API)
    if (formData.currentPassword !== "password123") {
      setErrorMessage("La contraseña actual es incorrecta")
      return
    }

    // Simular cambio exitoso
    setSuccessMessage("Tu contraseña ha sido actualizada exitosamente")
    
    // Reiniciar el formulario
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    })
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
              <Link to="/perfil" className="sidebar-item">
                <Edit size={18} />
                <span>Editar Información Personal</span>
              </Link>
              <Link to="/cambiar-contrasena" className="sidebar-item active">
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

          {/* Sección de cambio de contraseña */}
          <div className="perfil-sections">
            <section className="perfil-section">
              <div className="sectionperfil-header">
                <h2>Cambiar Contraseña</h2>
              </div>
              <div className="section-content">
                {successMessage && (
                  <div className="success-message">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="error-message">
                    {errorMessage}
                  </div>
                )}
                
                <form className="edit-form" onSubmit={handleSubmit}>
                  <div className="form-group password-group">
                    <label htmlFor="currentPassword">Contraseña Actual</label>
                    <div className="password-input-container">
                      <input
                        type={showCurrentPassword ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu contraseña actual"
                      />
                      <button 
                        type="button" 
                        className="toggle-password"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        aria-label={showCurrentPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showCurrentPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group password-group">
                    <label htmlFor="newPassword">Nueva Contraseña</label>
                    <div className="password-input-container">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        placeholder="Ingresa tu nueva contraseña"
                      />
                      <button 
                        type="button" 
                        className="toggle-password"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        aria-label={showNewPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <span className="password-hint">La contraseña debe tener al menos 8 caracteres</span>
                  </div>

                  <div className="form-group password-group">
                    <label htmlFor="confirmPassword">Confirmar Nueva Contraseña</label>
                    <div className="password-input-container">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirma tu nueva contraseña"
                      />
                      <button 
                        type="button" 
                        className="toggle-password"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="button" className="cancel-button" onClick={() => {
                      setFormData({
                        currentPassword: "",
                        newPassword: "",
                        confirmPassword: ""
                      })
                      setErrorMessage("")
                      setSuccessMessage("")
                    }}>
                      Cancelar
                    </button>
                    <button type="submit" className="save-button">
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
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