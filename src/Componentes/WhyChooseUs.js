import "../Estilos/WhyChooseUs.css"

function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  )
}

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title">¿Por qué elegirnos?</h2>

        <div className="features-grid">
          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            }
            title="Fiabilidad"
            description="Garantizamos servicios de alta calidad con proveedores verificados."
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8l4 4-4 4"></path>
                <path d="M3 12h18"></path>
                <path d="M7 16l-4-4 4-4"></path>
              </svg>
            }
            title="Sin Intermediarios"
            description="Trato directamente con proveedores y gestiona tus necesidades de transporte eficientemente."
          />

          <FeatureCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                <path d="M14 2v6h6"></path>
                <path d="M16 13H8"></path>
                <path d="M16 17H8"></path>
                <path d="M10 9H8"></path>
              </svg>
            }
            title="Contratos Seguros"
            description="Todos los servicios están respaldados por acuerdos contractuales claros y seguros."
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

