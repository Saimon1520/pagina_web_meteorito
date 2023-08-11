import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Meteoritos from './components/Meteoritos/Meteoritos';
import Comunidad from './components/Comunidad/Comunidad';
import Museo from './components/Museo/Museo';
import AcercaDe from './components/Acerca_de/Acerca_de';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element="" />
            <Route path="/Meteoritos" element={<Meteoritos></Meteoritos>} />
            <Route path="/Comunidad" element={<Comunidad></Comunidad>} />
            <Route path="/Museo" element={<Museo></Museo>} />
            <Route path="/Acerca-de" element={<AcercaDe></AcercaDe>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
