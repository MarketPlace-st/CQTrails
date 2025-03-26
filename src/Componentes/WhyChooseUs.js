import "../Estilos/WhyChooseUs.css";

// Importa tus íconos locales
import iconFiabilidad from "../Imagenes/Fiabilidad.png";
import iconIntermediarios from "../Imagenes/Sin Intermediarios.png";
import iconContratos from "../Imagenes/Contratos Seguros.png";

function FeatureCard({ iconSrc, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <img src={iconSrc} alt={title} className="feature-image" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}

function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="why-choose-title">¿Por qué elegirnos?</h2>
        <div className="features-grid">
          <FeatureCard
            iconSrc={iconFiabilidad}
            title="Fiabilidad"
            description="Garantizamos servicios de alta calidad con proveedores verificados."
          />
          <FeatureCard
            iconSrc={iconIntermediarios}
            title="Sin Intermediarios"
            description="Trato directamente con proveedores y gestiona tus necesidades de transporte eficientemente."
          />
          <FeatureCard
            iconSrc={iconContratos}
            title="Contratos Seguros"
            description="Todos los servicios están respaldados por acuerdos contractuales claros y seguros."
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;


