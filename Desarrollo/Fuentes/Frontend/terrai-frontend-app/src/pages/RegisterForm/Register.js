import React from "react";
import "./Register.css";
import logo from "../Assets/terrAI.svg";

const RegisterForm = () => {
  return (
    <div className="register">
      <div class="container-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="container-text">
          <h1>Registrate aquí</h1>
          <p>Crea tu cuenta</p>
        </div>
      </div>
      <form action="">
        <div class="container-body">
          <div className="input-box">
            <label>Empresa</label>
            <input type="text" placeholder="Empresa" required />
          </div>
          <div className="input-box">
            <label>RUC</label>
            <input type="number" placeholder="RUC" required />
          </div>
        </div>
        <div class="container-bottom">
          <button type="submit">Siguiente</button>
          <div className="login-link">
            <p>
              Ya tienes una cuenta?{" "}
              <a href="Login">
                <strong>Inicia sesión aquí</strong>
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
