import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
import "./index.css";
import "../pages/Mainpage.css";
import ReactDOM from "react-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
  };

  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <div className={"mainContainer"}>
            <div className={"titleContainer"}>
              <div>Login</div>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={email}
                placeholder="Enter your email here"
                onChange={(ev) => setEmail(ev.target.value)}
                className={"inputBox"}
              />
              <label className="errorLabel">{emailError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                value={password}
                placeholder="Enter your password here"
                onChange={(ev) => setPassword(ev.target.value)}
                className={"inputBox"}
              />
              <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={"inputContainer"}>
              <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Login;
