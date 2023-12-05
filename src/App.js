import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Meteoritos from './components/Meteoritos/Meteoritos.js';
import Comunidad from './components/Comunidad/Comunidad.js';
import Museo from './components/Museo/Museo.js';
import AcercaDe from './components/Acerca_de/Acerca_de.js';
import Home from './components/Body_home/retorno.js';
import Footer from './components/Footer/Footer.js';
import AZPage from './components/AZPage/AZPage.js';
import LaPalmera from './pages/La_Palmera.js';
import Navigation from './components/Navigation/Navigation.js';
import GLog from './components/GLog/GLog.js';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/Login" element={<GLog></GLog>} />
            <Route path="/" element={<Home></Home>} />
            <Route path="/La_Palmera" element={<LaPalmera/>} />
            <Route path="/Fragmentos" element={<Meteoritos></Meteoritos>} />
            <Route path="/Comunidad" element={<Comunidad></Comunidad>} />
            <Route path="/Museo" element={<Museo></Museo>} />
            <Route path="/AZPage" element={<AZPage></AZPage>} />
            <Route path="/Acerca-de" element={<AcercaDe></AcercaDe>} />
          </Routes>
        </Router>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
