import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAnalyticsApp from "../GoogleAnalytics/GoogleAnalyticsApp";
import { useGlobalContext } from '../../global.js';
import SideNavBar from "./SideNavBar.js";

const Adminpln = () => {
  const { isAdmin, setAdmin } = useGlobalContext();
  setAdmin(true)
  return (
    <div className="maindiv">
      <SideNavBar />
      <h1 className="AZTitle">Visualización de Métricas</h1>
      <GoogleOAuthProvider clientId="798495697820-e3ietj94l0jo5rng7gmvla5eloorsfmo.apps.googleusercontent.com">
        <GoogleAnalyticsApp />
      </GoogleOAuthProvider>
    </div>
  );
};
export default Adminpln;
