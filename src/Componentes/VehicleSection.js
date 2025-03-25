import "../Estilos/VehicleSection.css";
import lexusImage from "../Imagenes/Furgoneta.png";
import lexusLogo from "../Imagenes/Logo Lexus.png";
import toyotaRav4 from "../Imagenes/Carro Rav4.png";
import toyotaCamry from "../Imagenes/Minibus.png";
import toyotaLogo from "../Imagenes/Logo Toyota.png";
import hyundaiImage from "../Imagenes/Camionp.png";
import hyundaiLogo from "../Imagenes/Logo Hyundai.png";
import roverImage from "../Imagenes/CarroVoltzWagen.png";
import roverLogo from "../Imagenes/Logo Range Rover.png";

function VehicleCard({ image, brand, model, year, price, logo }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={image} alt={`${brand} ${model}`} />
      </div>
      <div className="vehicle-info">
        <div className="vehicle-brand">
          <img src={logo} alt={brand} className="brand-logo" />
          <span className="vehicle-name">
            {brand} {model} {year}
          </span>
        </div>
        <div className="vehicle-price">${price}/ día</div>
      </div>
    </div>
  );
}

function VehicleSection() {
  const vehicles = [
    {
      id: 1,
      image: lexusImage,
      brand: "Lexus",
      model: "ES",
      year: "2022",
      price: "99.00",
      logo: lexusLogo,
    },
    {
      id: 2,
      image: hyundaiImage,
      brand: "Hyundai",
      model: "Sonata",
      year: "2022",
      price: "99.00",
      logo: hyundaiLogo,
    },
    {
      id: 3,
      image: toyotaRav4,
      brand: "Toyota",
      model: "RAV4",
      year: "2020",
      price: "99.00",
      logo: toyotaLogo,
    },
    {
      id: 4,
      image: toyotaCamry,
      brand: "Toyota",
      model: "Camry",
      year: "2019",
      price: "99.00",
      logo: toyotaLogo,
    },
    {
      id: 5,
      image: roverImage,
      brand: "Range Rover",
      model: "Sport",
      year: "2022",
      price: "99.00",
      logo: roverLogo,
    },
    {
      id: 6,
      image: lexusImage,
      brand: "Lexus",
      model: "ES",
      year: "2022",
      price: "99.00",
      logo: lexusLogo,
    },
    {
      id: 7,
      image: toyotaRav4,
      brand: "Toyota",
      model: "RAV4",
      year: "2020",
      price: "99.00",
      logo: toyotaLogo,
    },
    {
      id: 8,
      image: toyotaCamry,
      brand: "Toyota",
      model: "Camry",
      year: "2022",
      price: "99.00",
      logo: toyotaLogo,
    },
  ];

  return (
    <section className="vehicles-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">¡Explora nuestros vehículos disponibles!</h2>
          <a href="#catalogo" className="view-more">
            Ver catálogo <span className="arrow">→</span>
          </a>
        </div>

        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleSection;




