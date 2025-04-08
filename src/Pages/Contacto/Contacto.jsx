import { useState } from "react"
import Header from "../../Componentes/Header"
import HeaderAuthenticated from "../../Componentes/HeaderAuthenticated"
import Footer from "../../Componentes/Footer"
import "./Contacto.css"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const [enviado, setEnviado] = useState(false)
  const isAuthenticated = localStorage.getItem("auth") === "true"

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    setEnviado(true)

    // Resetear el formulario después de 3 segundos
    setTimeout(() => {
      setEnviado(false)
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      })
    }, 3000)
  }

  return (
    <div className="contacto-container">
      {isAuthenticated ? <HeaderAuthenticated /> : <Header />}

      <main className="contacto-content">
        <section className="contacto-hero">
          <div className="hero-content">
            <h1>Contáctanos</h1>
            <p>¿Tienes dudas o necesitas ayuda? Contáctanos y con gusto te asistiremos.</p>
          </div>
        </section>

        <section className="contacto-main">
          <div className="contacto-info-container">
            <div className="contacto-info">
              <h2>Información de Contacto</h2>
              <p>Comunícate con nosotros a través de cualquiera de estos medios:</p>

              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">
                    <Phone size={20} />
                  </div>
                  <div className="info-text">
                    <h3>Teléfono</h3>
                    <p>+506 8562-5636</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Mail size={20} />
                  </div>
                  <div className="info-text">
                    <h3>Correo Electrónico</h3>
                    <p>info@cqtrails.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="info-text">
                    <h3>Dirección</h3>
                    <p>
                      Santo Domingo
                      <br />
                      República Dominicana
                    </p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <Clock size={20} />
                  </div>
                  <div className="info-text">
                    <h3>Horario de Atención</h3>
                    <p>
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mapa-container">
                <h3>Nuestra Ubicación</h3>
                <div className="mapa">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121976.85620917424!2d-69.98947869999999!3d18.4801987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89f1107ea5ab%3A0xd6c587b82715c164!2sSanto%20Domingo%2C%20Rep%C3%BAblica%20Dominicana!5e0!3m2!1ses!2sus!4v1649345678901!5m2!1ses!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de CQ Trails"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="contacto-form-container">
              <div className="contacto-form">
                <h2>Envíanos un Mensaje</h2>
                <p>Completa el formulario y te responderemos a la brevedad.</p>

                {enviado ? (
                  <div className="mensaje-enviado">
                    <div className="mensaje-icon">
                      <MessageCircle size={40} />
                    </div>
                    <h3>¡Mensaje Enviado!</h3>
                    <p>Gracias por contactarnos. Nos comunicaremos contigo pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombre">Nombre Completo</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Correo Electrónico</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="asunto">Asunto</label>
                      <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        value={formData.asunto}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje">Mensaje</label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="submit-button">
                      <Send size={16} />
                      <span>Enviar Mensaje</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>Preguntas Frecuentes</h2>

          <div className="faq-container">
            <div className="faq-item">
              <h3>¿Cómo puedo reservar un vehículo?</h3>
              <p>
              Puedes buscar y seleccionar un vehículo desde el catálogo, definir el periodo de uso, 
              personalizar la reserva si lo deseas, y agregarla al carrito. Una vez confirmadas, 
              las reservas se procesan y puedes visualizar su estado en Mis Reservaciones.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cuál es la política de combustible?</h3>
              <p>
                Entregamos los vehículos con el tanque lleno y esperamos que los devuelvas de la misma manera. Si el
                vehículo se devuelve con menos combustible, se cobrará la diferencia más un cargo por servicio.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Cuánto tiempo tarda en procesarse una reservación?</h3>
              <p>
                Sí, puedes cancelar tu reserva hasta 48 horas antes de la fecha de inicio sin costo. Cancelaciones
                posteriores pueden generar un cargo del 50% del valor de la reserva.
              </p>
            </div>

            <div className="faq-item">
              <h3>¿Qué pasa si necesito modificar o cancelar una reserva?</h3>
              <p>
              Las modificaciones o cancelaciones deben realizarse antes de que la reserva sea procesada. 
              Puedes gestionarlas directamente desde tu historial de reservas o contactar al soporte para asistencia.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}



