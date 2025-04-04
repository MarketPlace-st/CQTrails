import { useState, useEffect } from "react"
import "../Estilos/VehicleGallery.css"

// Importar imágenes adicionales para cada tipo de vehículo
import interiorFurgoneta from "../Imagenes/FurgonetaInterior.jpg"
import lateralFurgoneta from "../Imagenes/Furgoneta2.png"
import interiorSuv from "../Imagenes/Rav4Interior.png"
import lateralSuv from "../Imagenes/Rav4Lateral.png"
import interiorCamion from "../Imagenes/CamionetaCargaInterior.png"
import lateralCamion from "../Imagenes/CamionetaCargaLateral.png"
import interiorBus from "../Imagenes/Autobus 2.png"
import lateralBus from "../Imagenes/autobus-lujo-interior.jpg"
import interiorAmbulancia from "../Imagenes/AmbulanciaInterior.png"
import lateralAmbulancia from "../Imagenes/AmbulanciaLateral.png"

function VehicleGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [vehicleImages, setVehicleImages] = useState([])

  useEffect(() => {
    // Recuperar el vehículo seleccionado del localStorage
    const selectedVehicle = JSON.parse(localStorage.getItem('selectedVehicle'))
    if (selectedVehicle) {
      // Determinar qué conjunto de imágenes usar basado en el tipo de vehículo
      let interiorImage, lateralImage;
      
      switch(selectedVehicle.type) {
        case 'furgoneta':
          interiorImage = interiorFurgoneta;
          lateralImage = lateralFurgoneta;
          break;
        case 'suv':
          interiorImage = interiorSuv;
          lateralImage = lateralSuv;
          break;
        case 'camion':
          interiorImage = interiorCamion;
          lateralImage = lateralCamion;
          break;
        case 'autobus':
          interiorImage = interiorBus;
          lateralImage = lateralBus;
          break;
        case 'ambulancias':
          interiorImage = interiorAmbulancia;
          lateralImage = lateralAmbulancia;
          break;
        default:
          interiorImage = selectedVehicle.image;
          lateralImage = selectedVehicle.image;
      }

      setVehicleImages([
        { id: 1, src: selectedVehicle.image, alt: "Vista frontal" },
        { id: 2, src: interiorImage, alt: "Vista interior" },
        { id: 3, src: lateralImage, alt: "Vista lateral" }
      ])
    }
  }, [])

  return (
    <div className="vehicle-gallery">
      <div className="gallery-container">
        <div className="main-image-container">
          <img
            src={vehicleImages[selectedImage]?.src}
            alt={vehicleImages[selectedImage]?.alt}
            className="main-image"
          />
        </div>
        <div className="thumbnails-container">
          {vehicleImages.map((image, index) => (
            <div
              key={image.id}
              className={`thumbnail ${selectedImage === index ? "active" : ""}`}
              onClick={() => setSelectedImage(index)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VehicleGallery





