import { useState } from "react";
import "../Login/style.css";
import Navbar from "../../components/Nav";

function Login() {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner-content">
        <div className="container">
          <div className="banner-text">
            <h3>Pizza Devlivery</h3>
            <h1>MAESTRO PIZINNI</h1>
            <p>Lorem adjbusivbffuisvbauivbsiuabihfvbasdvgihs</p>
            <div className="banner-btn">
              <button className="btn">DEVLVERY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
