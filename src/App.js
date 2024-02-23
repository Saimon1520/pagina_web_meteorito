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
import GLog from "./components/GLog/GLog.js";
import AdminPage from "./components/AdminPanel/adminanaltytics.js";
import Adminadduser from "./components/AdminPanel/adminadduser.js";
import Adminusertable from "./components/AdminPanel/adminusertable.js";
import Adminuseredit from "./components/AdminPanel/adminedituser.js";
import { GlobalProvider } from './global';
import { InitializeGoogleAnalytics } from "./components/GoogleAnalytics/Analytics.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import CryptoJS from 'crypto-js';

function App() {
  //localStorage.clear();
  //localStorage.setItem("isAdmin", "true");
  //InitializeGoogleAnalytics();
  const key = "qwaser1221";

  if(localStorage.getItem('loginVerification') === null){
    localStorage.setItem('loginVerification',"false")
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
    <GlobalProvider>
      <div className="App">
        <div>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home></Home>} />
              <Route path="/La_Palmera" element={<LaPalmera />} />
              <Route path="/Fragmentos" element={<Meteoritos></Meteoritos>} />
              <Route path="/Comunidad" element={<Comunidad></Comunidad>} />
              <Route path="/Museo" element={<Museo></Museo>} />
              <Route path="/AZPage" element={<AZPage></AZPage>} />
              <Route path="/Acerca-de" element={<AcercaDe></AcercaDe>} />
              <Route path="/Login" element={<Login></Login>} />
              <Route path="/admin" element={<AdminPage></AdminPage>} />
              <Route path="/admin/useradd" element={<Adminadduser></Adminadduser>} />
              <Route path="/admin/usertable" element={<Adminusertable></Adminusertable>} />
              <Route path="/admin/usertable/useredit" element={<Adminuseredit></Adminuseredit>} />
            </Routes>
          </Router>
        </div>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </GlobalProvider>
  );
}

export default App;
