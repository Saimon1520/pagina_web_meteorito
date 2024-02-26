import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAnalyticsApp from "../GoogleAnalytics/GoogleAnalyticsApp.jsx";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";
import { Navigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const Adminroles = () => {

  const getVerification = () => {
    try {
      return CryptoJS.AES.decrypt(localStorage.getItem('loginVerification'), "qwaser1221").toString(CryptoJS.enc.Utf8)
    } catch (error) {
      return "false"
    }
  }

  if (getVerification() !== "true") {
    return <Navigate replace to="/Login" />;
  } else {
    return (
      <div className="maindiv">
        <SideNavBar />
        <h1 className="MTitle">Gestor de Roles</h1>
      </div>
    );
  }

};
export default Adminroles;
