import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meteoritos from "./components/Meteoritos/Meteoritos.js";
import Comunidad from "./components/Comunidad/Comunidad.js";
import Museo from "./components/Museo/Museo.js";
import AcercaDe from "./components/Acerca_de/Acerca_de.js";
import Home from "./components/Body_home/retorno.js";
import Footer from "./components/Footer/Footer.js";
import AZPage from "./components/AZPage/AZPage.js";
import LaPalmera from "./pages/La_Palmera.js";
import Navigation from "./components/Navigation/Navigation.js";
import Login from './pages/Login.js';
import AdminPage from "./components/AdminPanel/adminroletable.js";
import Adminadduser from "./components/AdminPanel/adminadduser.js";
import Adminusertable from "./components/AdminPanel/adminusertable.js";
import Adminuseredit from "./components/AdminPanel/adminedituser.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CryptoJS from 'crypto-js';
import Adminaddrole from "./components/AdminPanel/adminaddrole.js";
import Adminroledit from "./components/AdminPanel/admineditrole.js";
import Eventos from "./components/Eventos/Eventos.js";

function App() {
  const key = "qwaser1221";

  if (localStorage.getItem('loginVerification') === null) {
    localStorage.setItem('loginVerification', "false")
  }


  const desencryptDate = () => {
    const f = new Date();
    const encryptedMessage = localStorage.getItem('Date');

    try {
      const decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);

      if (decryptedMessage !== f.toLocaleDateString()) {
        localStorage.removeItem('Date')
        localStorage.removeItem('loginVerification')
      }
    } catch (error) {
      localStorage.removeItem('Date')
      localStorage.removeItem('loginVerification')
    }
  }

  window.addEventListener("beforeunload", () => localStorage.removeItem('section'));

  if (localStorage.getItem('Date') !== null) {
    desencryptDate();
  }

  return (
    <div className="App">
      <div>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/Meteorito" element={<Meteoritos></Meteoritos>} />
            <Route path="/Comunidad" element={<Comunidad></Comunidad>} />
            <Route path="/Museo" element={<Museo></Museo>} />
            <Route path="/La-Palmera" element={<LaPalmera></LaPalmera>} />
            <Route path="/AZPage" element={<AZPage></AZPage>} />
            <Route path="/admin" element={<AdminPage></AdminPage>} />
            <Route path="/admin/useradd" element={<Adminadduser></Adminadduser>} />
            <Route path="/admin/usertable" element={<Adminusertable></Adminusertable>} />
            <Route path="/admin/usertable/useredit" element={<Adminuseredit></Adminuseredit>} />
            <Route path="/admin/rolesadd" element={<Adminaddrole></Adminaddrole>} />
            <Route path="/admin/roleedit" element={<Adminroledit></Adminroledit>} />
            <Route path="/Eventos" element={<Eventos></Eventos>} />
            <Route path="/login" element={<Login></Login>} />
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
