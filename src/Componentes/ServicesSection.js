import "../Estilos/ServicesSection.css"

function ServiceCard({ image, title }) {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={image || "/placeholder.svg"} alt={title} />
      </div>
      <div className="service-title">{title}</div>
    </div>
  )
}

function ServicesSection() {
  const services = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      title: "Vehículos Seguros",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      title: "Gestión de Reservas",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      title: "Logística de Flota",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      title: "Vehículos Limpios",
    },
  ]

  return (
    <section className="services-section">
      <div className="container">
        <div className="services-header">
          <div className="services-text">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="services-description">
              En CQTrails encuentras una amplia gama de soluciones de transporte para cualquier necesidad empresarial.
              Ofrecemos vehículos de calidad y atención directa, sin intermediarios.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        <div className="services-footer">
          <a href="#contacto" className="contact-link">
            Contáctanos <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

