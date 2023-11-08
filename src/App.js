import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShowPeople from './components/show-people-component/ShowPeople';
import La_Palmera from './pages/La_Palmera.js';
import Meteoritos from './components/Meteoritos/Meteoritos';
import Comunidad from './components/Comunidad/Comunidad';
import Museo from './components/Museo/Museo';
import AcercaDe from './components/Acerca_de/Acerca_de';
import Body_home from './components/Body_home/retorno';
import Footer from './components/Footer/Footer';
import AZPage from './components/AZPage/AZPage';

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Body_home></Body_home>} />
            <Route path="/La_Palmera" element={<La_Palmera />} />
            <Route path="/" element={<Body_home></Body_home>} />
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
