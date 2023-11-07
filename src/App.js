import './App.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Meteoritos from './components/Meteoritos/Meteoritos';
import Comunidad from './components/Comunidad/Comunidad';
import Museo from './components/Museo/Museo';
import AcercaDe from './components/Acerca_de/Acerca_de';
<<<<<<< HEAD
import Body_home from './components/Body_home/retorno';
=======
import Footer from './components/Footer/Footer';
import AZPage from './components/AZPage/AZPage';
>>>>>>> 00f41b45383568e7c0be35d94aa0de1ab3e4f2bd

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Body_home/>
          <Routes>
            <Route path="/" element="" />
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
