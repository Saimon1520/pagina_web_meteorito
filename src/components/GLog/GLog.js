import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./GLog.css";

const GLog = () => {
  const notify = () => toast.error("Try the other one haha");
  const loginSuccessResponseHandler = (credentialResponse) => {
    console.log(credentialResponse);
    let decoded = jwtDecode(credentialResponse.credential);
    localStorage.setItem("user", JSON.stringify(decoded));
    window.location.href = "/";
    console.log(decoded);
  };
  const loginErrorResponseHandler = () => {
    alert("Login failed, please try again");
  };
  return (
    <GoogleOAuthProvider clientId="18174191391-rl1pjrvsqv6h4stilsrtb6rbnt5nhbbn.apps.googleusercontent.com">
      <div className="GLog">
        <div className="GLog__Login">
          <h1>Login with Username</h1>
          <input
            className="GLog__Login__input"
            type="text"
            placeholder="Username"
          />
          <input
            className="GLog__Login__input"
            type="password"
            placeholder="Password"
          />
          <button className="GLog__Login__button" onClick={notify}>
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
            Login
          </button>
          <p>Or Sign In with Google</p>
          <GoogleLogin
            onSuccess={loginSuccessResponseHandler}
            onError={loginErrorResponseHandler}
            theme="filled_black"
            shape="circle"
            text="continue_with"
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default GLog;
