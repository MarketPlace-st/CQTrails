import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from "./Pages/Home"
import HomeAuthenticated from "./Pages/HomeAuthenticated"
import Reservar from "./Pages/Reservar"
import AgregarReserva from "./Pages/AgregarReserva"
import HistorialReservaciones from "./Pages/HistorialReservaciones"
import MiCarrito from "./Pages/MiCarrito"
import DetallesReservacion from "./Pages/DetallesReservacion"

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"
  
  if (!isAuthenticated) {
    return <Navigate to="/" />
  }
  
  return children
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/home-auth" 
            element={
              <ProtectedRoute>
                <HomeAuthenticated />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/reservar" 
            element={
              <ProtectedRoute>
                <Reservar />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/agregar-reserva/:vehicleId" 
            element={
              <ProtectedRoute>
                <AgregarReserva />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/historial" 
            element={
              <ProtectedRoute>
                <HistorialReservaciones />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/contacto" 
            element={
              <ProtectedRoute>
                <div>Página de Contacto</div>
              </ProtectedRoute>
            } 
          />
          <Route path="/micarrito" element={<ProtectedRoute><MiCarrito /></ProtectedRoute>} />
          <Route 
            path="/historial/:id" 
            element={
              <ProtectedRoute>
                <DetallesReservacion />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App










