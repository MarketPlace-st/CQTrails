import { Link } from "react-router-dom"
import "./VehicleSection.css"

// Importar imágenes de vehículos
import van from "../../../Imagenes/Furgoneta.png"
import truck from "../../../Imagenes/CamionC.png"
import suv from "../../../Imagenes/Carro Rav4.png"
import minibus from "../../../Imagenes/Minibus.png"
import sedan from "../../../Imagenes/CarroKia.png"
import pickup from "../../../Imagenes/Camioneta.png"
import camion from "../../../Imagenes/CamionLarge.png"
import crossover from "../../../Imagenes/Autobus.png"

// Importar logos de marcas
import toyotaLogo from "../../../Imagenes/Logo Hyundai.png"
import lexusLogo from "../../../Imagenes/Logo Lexus.png"
import hyundaiLogo from "../../../Imagenes/Logo Toyota.png"
import rangeLogo from "../../../Imagenes/Logo Range Rover.png"

function VehicleSection() {
  const vehicles = [
    {
      id: 1,
      name: "Lexus ES 2022",
      price: "$99.00/ day",
      image: van,
      logo: lexusLogo,
      bgClass: "bg-white",
    },
    {
      id: 2,
      name: "Hyundai Sonata 2022",
      price: "$99.00/ day",
      image: truck,
      logo: hyundaiLogo,
      bgClass: "bg-mint",
    },
    {
      id: 3,
      name: "Toyota RAV 4 2020",
      price: "$99.00/ day",
      image: suv,
      logo: toyotaLogo,
      bgClass: "bg-white",
    },
    {
      id: 4,
      name: "Toyota Camry 2018",
      price: "$99.00/ day",
      image: minibus,
      logo: toyotaLogo,
      bgClass: "bg-mint",
    },
    {
      id: 5,
      name: "Range Rover 2022",
      price: "$99.00/ day",
      image: crossover,
      logo: rangeLogo,
      bgClass: "bg-mint",
    },
    {
      id: 6,
      name: "Lexus ES 2022",
      price: "$99.00/ day",
      image: sedan,
      logo: lexusLogo,
      bgClass: "bg-white",
    },
    {
      id: 7,
      name: "Toyota RAV 4 2020",
      price: "$99.00/ day",
      image: camion,
      logo: toyotaLogo,
      bgClass: "bg-mint",
    },
    {
      id: 8,
      name: "Toyota Camry 2",
      price: "$99.00/ day",
      image: pickup,
      logo: toyotaLogo,
      bgClass: "bg-white",
    },
  ]

  return (
    <section className="cq-vehicles">
      <div className="cq-vehicles__container">
        <div className="cq-vehicles__header">
          <h2 className="cq-vehicles__title">¡Explora nuestros vehículos disponibles!</h2>
          <Link to="/" className="cq-vehicles__catalog-link">
            Ver todos los vehículos
          </Link>
        </div>

        <div className="cq-vehicles__grid">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className={`cq-vehicles__card ${vehicle.bgClass === 'bg-mint' ? 'cq-vehicles__card--mint' : 'cq-vehicles__card--white'}`}
            >
              <div className="cq-vehicles__image-wrapper">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="cq-vehicles__image"
                />
              </div>
              <div className="cq-vehicles__info">
                <div className="cq-vehicles__brand">
                  <img 
                    src={vehicle.logo} 
                    alt="Logo marca" 
                    className="cq-vehicles__brand-logo"
                  />
                  <h3 className="cq-vehicles__name">{vehicle.name}</h3>
                </div>
                <p className="cq-vehicles__price">{vehicle.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VehicleSection






