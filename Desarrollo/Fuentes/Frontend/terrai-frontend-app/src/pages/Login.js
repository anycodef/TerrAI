import React from "react";
import "./Login.css";
import logo from "./Assets/terrAI.svg";

const Login = () => {
  return (
    <div className="login">
      <div class="container-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div class="container-text">
          <h1>Bienvenido</h1>
          <p>Inicia sesión aquí</p>
        </div>
      </div>
      <form action="">
        <div class="container-body">
          <div className="input-box">
            <label>Correo</label>
            <input type="text" placeholder="Correo" required />
          </div>
          <div className="input-box">
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div className="forgot">
            <a href="Forgot">Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div class="container-bottom">
          <button type="submit">Iniciar sesión</button>
          <div className="register-link">
            <p>
              No tienes una cuenta?{" "}
              <a href="Register">
                <strong>Registrate aquí</strong>
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
