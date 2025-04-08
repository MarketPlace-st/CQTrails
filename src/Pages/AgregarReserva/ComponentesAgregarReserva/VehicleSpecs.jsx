import "./VehicleSpecs.css"

function VehicleSpecs({ vehicle }) {
  return (
    <div className="vehicle-specs">
      <h2 className="vehicle-name">{vehicle.name}</h2>
      <p className="vehicle-description">{vehicle.description}</p>
      
      <div className="specs-grid">
        {vehicle.specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <span className="spec-label">{spec.label}</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VehicleSpecs



