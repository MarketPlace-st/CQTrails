import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./index.css"; 

function App() {
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

