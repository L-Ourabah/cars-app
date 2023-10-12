import { Routes, Route } from 'react-router-dom'
import "./index.css";

import Accueil from "./pages/home.js";
import Gallery from "./pages/Gallery.js";
import Error from "./pages/error.js";
import CarDetails from './pages/CardDetails.js';
import About from './pages/About.js';
import { Connexion } from './pages/Connexion';
import { Admin } from './pages/admin/Admin.js';
import { CrudOneCar, CrudOneUser } from './pages/admin/CRUD-unique';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="*" element={<Error />} />
      <Route path="/CarData/:id" element={<CarDetails />} />
      <Route path="/About" element={<About />} />

      <Route path="/connexion" element={<Connexion />} />

      {/* ADMINISTRATION */}
      <Route path="/admin" />
      <Route path="/admin/gestion" element={< Admin />} />
      <Route path="/admin/gestion/users/:id" element={< CrudOneUser />} />
      <Route path="/admin/gestion/cars/:id" element={<CrudOneCar />} />
    </Routes>
  );
}

export default App;
