import { Routes, Route } from 'react-router-dom'
import "./index.css";
import Accueil from "./pages/home.js";
import Gallery from "./pages/Gallery.js";
import Error from "./pages/error.js";
import CarDetails from './pages/CardDetails.js';
import About from './pages/About.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="*" element={<Error />} />
      <Route path="/CarData/:id" element={<CarDetails/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
  );
}

export default App;
