import { useState, useEffect } from "react"
import HeaderAuthenticated from "../Componentes/HeaderAuthenticated"
import Sidebar from "../Componentes/SideBar"
import VehicleGrid from "../Componentes/VehicleGrid"
import SearchBar from "../Componentes/SearchBar"
import Footer from "../Componentes/Footer"
import "../Estilos/Reservar.css"

// Importar imágenes
import van1 from "../Imagenes/Furgoneta.png"
//import van2 from "../Imagenes/Camioneta.png"
import truck from "../Imagenes/Carro Rav4.png"
import pickup from "../Imagenes/CamionC.png"
import bus from "../Imagenes/Autobus.png"
import ambulance from "../Imagenes/Ambulancia.png"
//import truck2 from "../Imagenes/Camionp.png"
//import semi from "../Imagenes/CarroKia.png"
//import semi2 from "../Imagenes/Minibus.png"

function Reservar() {
  // Datos iniciales de vehículos
  const initialVehicles = [
    {
      id: "v1",
      brand: "Koenigsegg Toyota",
      type: "furgoneta",
      model: "Hiace",
      year: "2023",
      image: van1,
      seats: 12,
      transmission: "Manual",
      fuel: "90L",
      price: 99.00
    },
    {
      id: "v2",
      brand: "Koenigsegg Toyota",
      type: "suv",
      model: "RAV4",
      year: "2023",
      image: truck,
      seats: 4,
      transmission: "Manual",
      fuel: "90L",
      price: 99.00
    },
    {
      id: "v3",
      brand: "Koenigsegg Toyota",
      type: "camion",
      model: "Dyna",
      year: "2023",
      image: pickup,
      seats: 3,
      transmission: "Manual",
      fuel: "90L",
      price: 99.00
    },
    {
      id: "v4",
      brand: "Koenigsegg Toyota",
      type: "autobus",
      model: "Coaster",
      year: "2023",
      image: bus,
      seats: 30,
      transmission: "Manual",
      fuel: "90L",
      price: 99.00
    },
    {
      id: "v5",
      brand: "Koenigsegg Toyota",
      type: "ambulancias",
      model: "HiAce",
      year: "2023",
      image: ambulance,
      seats: 4,
      transmission: "Manual",
      fuel: "90L",
      price: 99.00
    },
    // Agregar más vehículos según sea necesario
  ]

  const [vehicles] = useState(initialVehicles)
  const [filteredVehicles, setFilteredVehicles] = useState(initialVehicles)
  const [filters, setFilters] = useState({
    type: null,
    capacity: null,
    priceRange: 500,
    brand: "",
    model: "",
    year: ""
  })

  // Función para aplicar todos los filtros
  const applyFilters = () => {
    let filtered = [...vehicles]

    // Filtro por tipo
    if (filters.type) {
      filtered = filtered.filter(vehicle => vehicle.type === filters.type)
    }

    // Filtro por capacidad
    if (filters.capacity) {
      filtered = filtered.filter(vehicle => {
        switch(filters.capacity) {
          case "2personas": return vehicle.seats === 2
          case "4personas": return vehicle.seats === 4
          case "6personas": return vehicle.seats === 6
          case "8omas": return vehicle.seats >= 8
          default: return true
        }
      })
    }

    // Filtro por precio
    filtered = filtered.filter(vehicle => vehicle.price <= filters.priceRange)

    // Filtros de búsqueda
    if (filters.brand) {
      filtered = filtered.filter(vehicle => 
        vehicle.brand.toLowerCase().includes(filters.brand.toLowerCase())
      )
    }
    if (filters.model) {
      filtered = filtered.filter(vehicle => 
        vehicle.model.toLowerCase().includes(filters.model.toLowerCase())
      )
    }
    if (filters.year) {
      filtered = filtered.filter(vehicle => 
        vehicle.year.toString() === filters.year
      )
    }

    setFilteredVehicles(filtered)
  }

  // Aplicar filtros cuando cambien
  useEffect(() => {
    applyFilters()
  }, [filters, vehicles])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="page-container">
      <HeaderAuthenticated />
      <div className="vehicle-rental">
        <div className="container">
          <div className="vehicle-content">
            <Sidebar
              selectedType={filters.type}
              selectedCapacity={filters.capacity}
              priceRange={filters.priceRange}
              onTypeChange={(type) => handleFilterChange('type', type)}
              onCapacityChange={(capacity) => handleFilterChange('capacity', capacity)}
              onPriceChange={(price) => handleFilterChange('priceRange', price)}
            />
            <div className="main-content">
              <SearchBar 
                filters={filters}
                onFilterChange={handleFilterChange}
              />
              <VehicleGrid vehicles={filteredVehicles} />
              <div className="reserve-more-container">
                <button className="reserve-more-btn">Mostrar Más</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Reservar