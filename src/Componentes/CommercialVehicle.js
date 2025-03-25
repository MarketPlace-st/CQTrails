import "../Estilos/CommercialVehicles.css"

function CommercialVehicleCard({ image, brand, model, price }) {
  return (
    <div className="commercial-card">
      <div className="commercial-info">
        <h3 className="commercial-brand">
          {brand}
          <br />
          {model}
        </h3>
        <div className="commercial-price">$ {price}</div>
      </div>
      <div className="commercial-image">
        <img src={image || "/placeholder.svg"} alt={`${brand} ${model}`} />
      </div>
    </div>
  )
}

function CommercialVehicles() {
  const commercialVehicles = [
    {
      id: 1,
      image: "/placeholder.svg?height=150&width=200",
      brand: "Renault",
      model: "Premium",
      price: "36 000",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=150&width=200",
      brand: "Volvo",
      model: "FH",
      price: "24 000",
    },
  ]

  return (
    <section className="commercial-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Vehículos Comerciales</h2>
          <a href="#mas-comerciales" className="view-more">
            Ver más <span className="arrow">→</span>
          </a>
        </div>

        <div className="commercial-grid">
          {commercialVehicles.map((vehicle) => (
            <CommercialVehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommercialVehicles