import "./adminpln.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleAnalyticsApp from "../GoogleAnalytics/GoogleAnalyticsApp";

const AZPage = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId={"798495697820-e3ietj94l0jo5rng7gmvla5eloorsfmo.apps.googleusercontent.com"}>
        <GoogleAnalyticsApp />
      </GoogleOAuthProvider>
    </div>
  );
};
export default AZPage;
