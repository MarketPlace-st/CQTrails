import HeaderAuthenticated from "../Componentes/HeaderAuthenticated"
import Footer from "../Componentes/Footer"
import "../Estilos/DetallesReservacion.css"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import TotalSummary from '../Componentes/TotalSummary'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PreFacturaPDF from '../Componentes/PreFacturaPDF'

// Importar imágenes de vehículos
import furgoneta1 from "../Imagenes/Furgoneta.png"
import furgoneta2 from "../Imagenes/Camioneta.png"
import furgoneta3 from "../Imagenes/Minibus.png"

export default function DetallesReservacion() {
  const { id } = useParams()
  const [reservacionInfo, setReservacionInfo] = useState(null)
  const [vehiculosReservados, setVehiculosReservados] = useState([])

  // Datos de ejemplo del historial (en producción esto vendría de una API)
  const reservationsData = [
    {
      id: 1,
      fecha: "20 de Julio de 2022",
      reservadaA: "Marco Polo",
      total: "14.00",
      subtotal: "12.39",
      estado: "Aprobada",
      empresa: "Empresa A",
      correo: "empresa@example.com",
      telefono: "+506 1234-5678",
      direccion: "San José, Costa Rica",
      vehiculos: [
        {
          id: 1,
          nombre: "Toyota Hiace",
          tipo: "Furgoneta",
          fechaInicio: "20 de Julio de 2022",
          fechaFin: "22 de Julio 2022",
          cantidad: 1,
          subtotal: "12.39"
        }
      ]
    },
    {
      id: 2,
      fecha: "5 de Marzo de 2025",
      reservadaA: "Polo Marco",
      total: "14.00",
      estado: "Pendiente",
      empresa: "Empresa B",
      correo: "empresab@example.com",
      telefono: "+506 8888-8888",
      direccion: "Heredia, Costa Rica",
      vehiculos: []
    },
    {
      id: 3,
      fecha: "30 de Mayo de 2023",
      reservadaA: "Polo Marco",
      total: "14.00",
      estado: "Denegada",
      empresa: "Empresa C",
      correo: "empresac@example.com",
      telefono: "+506 9999-9999",
      direccion: "Cartago, Costa Rica",
      vehiculos: []
    }
  ]

  useEffect(() => {
    // Buscar la reservación correspondiente al ID
    const reservacion = reservationsData.find(r => r.id === parseInt(id))
    if (reservacion) {
      setReservacionInfo(reservacion)
      setVehiculosReservados(reservacion.vehiculos)
    }
  }, [id])

  if (!reservacionInfo) {
    return <div>Cargando...</div>
  }

  const subtotal = reservacionInfo.subtotal || "0.00"
  const iva = (parseFloat(subtotal) * 0.13).toFixed(2)
  const total = reservacionInfo.total || "0.00"

  return (
    <div className="detalles-reservacion-container">
      <HeaderAuthenticated />

      <main className="detalles-reservacion-content">
        <div className="reservacion-header">
          <div className="reservacion-info">
            <h1>Detalles de Reservación</h1>
            <span className="reservacion-id">#{`REV-${reservacionInfo.id}`}</span>
          </div>
          <div className="header-actions">
            <span className={`estado-badge ${reservacionInfo.estado.toLowerCase()}`}>
              {reservacionInfo.estado}
            </span>
            {reservacionInfo.estado.toLowerCase() === 'aprobada' && (
              <PDFDownloadLink
                document={
                  <PreFacturaPDF
                    reservacionInfo={{
                      id: `REV-${reservacionInfo.id}`,
                      fecha: reservacionInfo.fecha,
                      empresa: reservacionInfo.empresa,
                      correo: reservacionInfo.correo,
                      telefono: reservacionInfo.telefono,
                      direccion: reservacionInfo.direccion,
                      estado: reservacionInfo.estado
                    }}
                    vehiculos={vehiculosReservados}
                    subtotal={subtotal}
                    iva={iva}
                    total={total}
                  />
                }
                fileName={`pre-factura-${reservacionInfo.id}.pdf`}
                className="download-button download-button-filled"
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Generando PDF...' : 'Descargar Pre-Factura'
                }
              </PDFDownloadLink>
            )}
          </div>
        </div>

        <div className="content-grid">
          <div className="main-content">
            <div className="info-section">
              <h2>Información de Contacto</h2>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Empresa</span>
                  <span className="info-value">{reservacionInfo.empresa}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Correo</span>
                  <span className="info-value">{reservacionInfo.correo}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Teléfono</span>
                  <span className="info-value">{reservacionInfo.telefono}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Dirección</span>
                  <span className="info-value">{reservacionInfo.direccion}</span>
                </div>
              </div>
            </div>

            <div className="vehiculos-section">
              <h2>Vehículos Reservados</h2>
              {vehiculosReservados.map(vehiculo => (
                <div key={vehiculo.id} className="vehiculo-card">
                  <div className="vehiculo-info">
                    <div className="vehiculo-imagen">
                      <img src={vehiculo.imagen} alt={vehiculo.nombre} />
                    </div>
                    <div className="vehiculo-detalles">
                      <h3>{vehiculo.nombre}</h3>
                      <p className="vehiculo-tipo">{vehiculo.tipo}</p>
                      <div className="fechas-grid">
                        <div className="fecha-grupo">
                          <span className="fecha-label">Inicio</span>
                          <span className="fecha-valor">{vehiculo.fechaInicio}</span>
                          <span className="hora-valor">{vehiculo.horaInicio}</span>
                        </div>
                        <div className="fecha-grupo">
                          <span className="fecha-label">Fin</span>
                          <span className="fecha-valor">{vehiculo.fechaFin}</span>
                          <span className="hora-valor">{vehiculo.horaFin}</span>
                        </div>
                      </div>
                    </div>
                    <div className="vehiculo-cantidad">
                      <span className="cantidad-label">Cantidad</span>
                      <span className="cantidad-valor">{vehiculo.cantidad}</span>
                    </div>
                    <div className="vehiculo-precio">
                      <span className="precio-label">Subtotal</span>
                      <span className="precio-valor">${vehiculo.subtotal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="side-content">
            <TotalSummary 
              subtotal={subtotal}
              total={total}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}



