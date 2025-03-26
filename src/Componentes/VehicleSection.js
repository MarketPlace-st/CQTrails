import "../Estilos/VehicleSection.css"

// Importamos logos de marcas
import toyotaLogo from "../Imagenes/Logo Toyota.png" 
import lexusLogo from "../Imagenes/Logo Lexus.png" 
import hyundaiLogo from "../Imagenes/Logo Hyundai.png" 
import rangeRoverLogo from "../Imagenes/Logo Range Rover.png"

// Importamos imágenes de vehículos
import lexusES from "../Imagenes/Furgoneta.png" 
import hyundaiSonata from "../Imagenes/CamionC.png" 
import toyotaRAV4 from "../Imagenes/Carro Rav4.png" 
import toyotaCamry from "../Imagenes/Minibus.png" 
import rangeRoverSport from "../Imagenes/CarroVoltzWagen.png" 
import toyotaRAV4_2 from "../Imagenes/Minibus1.png" 
import toyotaCamry2 from "../Imagenes/Camioneta.png" 
import lexusES2 from "../Imagenes/CarroKia.png" 

function VehicleCard({ image, brand, model, year, price, logo, bgColor }) {
    return (
      <div className={`vehicle-card ${bgColor}`}>
        <div className="vehicle-image">
          <img src={image || "/placeholder.svg"} alt={`${brand} ${model}`} />
        </div>
        <div className="vehicle-info">
          <div className="vehicle-brand">
            <img src={logo || "/placeholder.svg"} alt={brand} className="brand-logo" />
            <div className="vehicle-details">
              <div className="vehicle-name">
                {brand} {model} {year}
              </div>
              <div className="vehicle-price">${price}/ day</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function VehicleSection() {
    // Datos de ejemplo para los vehículos
    const vehicles = [
      {
        id: 1,
        image: lexusES || "/placeholder.svg?height=150&width=200",
        brand: "Lexus",
        model: "ES",
        year: "2022",
        price: "99.00",
        logo: lexusLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-white",
      },
      {
        id: 2,
        image: hyundaiSonata || "/placeholder.svg?height=150&width=200",
        brand: "Hyundai",
        model: "Sonata",
        year: "2022",
        price: "99.00",
        logo: hyundaiLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-mint",
      },
      {
        id: 3,
        image: toyotaRAV4 || "/placeholder.svg?height=150&width=200",
        brand: "Toyota",
        model: "RAV 4",
        year: "2020",
        price: "99.00",
        logo: toyotaLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-white",
      },
      {
        id: 4,
        image: toyotaCamry || "/placeholder.svg?height=150&width=200",
        brand: "Toyota",
        model: "Camry",
        year: "2019",
        price: "99.00",
        logo: toyotaLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-mint",
      },
      {
        id: 5,
        image: rangeRoverSport || "/placeholder.svg?height=150&width=200",
        brand: "Range Rover",
        model: "Sport",
        year: "2022",
        price: "99.00",
        logo: rangeRoverLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-mint",
      },
      {
        id: 6,
        image: lexusES2 || "/placeholder.svg?height=150&width=200",
        brand: "Lexus",
        model: "ES",
        year: "2022",
        price: "99.00",
        logo: lexusLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-white",
      },
      {
        id: 7,
        image: toyotaRAV4_2 || "/placeholder.svg?height=150&width=200",
        brand: "Toyota",
        model: "RAV 4",
        year: "2020",
        price: "99.00",
        logo: toyotaLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-mint",
      },
      {
        id: 8,
        image: toyotaCamry2 || "/placeholder.svg?height=150&width=200",
        brand: "Toyota",
        model: "Camry",
        year: "2",
        price: "99.00",
        logo: toyotaLogo || "/placeholder.svg?height=30&width=30",
        bgColor: "bg-white",
      },
    ]
  
    return (
      <section className="vehicles-section">
        <div className="vehicles-container">
          <div className="section-header">
            <h2 className="section-title">¡Explora nuestros vehículos disponibles!</h2>
            <a href="#catalogo" className="catalog-link">
              Ver catálogo{" "}
              <svg
                className="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
  
          <div className="vehicles-grid">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default VehicleSection




