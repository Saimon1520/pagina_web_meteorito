import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAnalyticsApp from "../GoogleAnalytics/GoogleAnalyticsApp.jsx";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { Navigate } from "react-router-dom";

const Adminanaltytics = () => {
  const { isAdmin, setAdmin } = useGlobalContext();
  //setAdmin(true)

  


  if (localStorage.getItem('loginVerification') !== "true") {
    return <Navigate replace to="/Login" />;
  } else {
    return (
      <div className="maindiv">
        <SideNavBar />
        <h1 className="MTitle">Visualización de Métricas</h1>
        <GoogleOAuthProvider clientId="798495697820-e3ietj94l0jo5rng7gmvla5eloorsfmo.apps.googleusercontent.com">
          <GoogleAnalyticsApp />
        </GoogleOAuthProvider>
      </div>
    );
  }

};
export default Adminanaltytics;
