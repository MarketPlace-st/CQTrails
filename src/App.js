import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./Pages/Home/Home.jsx"
import HomeAuthenticated from "./Pages/Home/HomeAuthenticated.jsx"
import Reservar from "./Pages/Reservar/Reservar.jsx"
import AgregarReserva from "./Pages/AgregarReserva/AgregarReserva.jsx"
import HistorialReservaciones from "./Pages/Historial Reservaciones/HistorialReservaciones.jsx"
import MiCarrito from "./Pages/Mi Carrito/MiCarrito.jsx"
import DetallesReservacion from "./Pages/DetallesReservacion/DetallesReservacion.jsx"
import Contacto from "./Pages/Contacto/Contacto.jsx"
import Perfil from "./Pages/MiPerfil/Perfil.jsx"
import CambiarContrasena from "./Pages/MiPerfil/CambiarContrasena.jsx"
import { Navigate } from "react-router-dom"

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("auth") === "true"
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  
  return children
}

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/reservar" element={<Reservar />} />
          
          {/* Rutas protegidas */}
          <Route 
            path="/home-auth" 
            element={
              <ProtectedRoute>
                <HomeAuthenticated />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/agregar-reserva/:id" 
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
            path="/perfil" 
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/cambiar-contrasena" 
            element={
              <ProtectedRoute>
                <CambiarContrasena />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/micarrito" 
            element={
              <ProtectedRoute>
                <MiCarrito />
              </ProtectedRoute>
            } 
          />
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










