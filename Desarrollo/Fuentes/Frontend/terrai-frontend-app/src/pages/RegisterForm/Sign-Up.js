import React from "react";
import "./SignUp.css";
import logo from "../Assets/terrAI.svg";

const SignUp = () => {
  return (
    <div className="sign-up">
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
            <label>Nombre</label>
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="input-box">
            <label>Correo</label>
            <input type="email" placeholder="Correo" required />
          </div>
          <div className="input-box">
            <label>Contraseña</label>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <div className="input-box">
            <label>Método de pago</label>
            <div class="payment-methods">
              <button type="submit">Opc. 1</button>
              <button type="submit">Opc. 2</button>
              <button type="submit">Opc. 3</button>
            </div>
          </div>
        </div>
        <div class="container-bottom">
          <button type="submit">Registrarse</button>
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

export default SignUp;
