import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/api";  // importar la función de login desde api.js
import "./Login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);  // llamar a la función de login
      console.log("login successful:", response);  // mensaje de depuración
      setErrorMessage("");  // limpiar mensaje de error
      navigate("/");  // redirigir al dashboard Inicio en caso de éxito
    } catch (error) {
      console.error("login error:", error.response ? error.response.data.error : error.message);  // mensaje de depuración
      setErrorMessage(error.response ? error.response.data.error : "Error desconocido. Inténtalo de nuevo.");  // mostrar el mensaje de error en caso de fallo
    }
  };

  return (
    <div className="login">
      <div className="container-header">
        <div className="logo">
          <img src="logo.svg" alt="Logo" />
        </div>
        <div className="container-text">
          <h1>Bienvenido</h1>
          <p>Inicia sesión aquí</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container-body">
          <div className="input-box">
            <label>Correo</label>
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="input-box">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="forgot">
            <a href="Forgot">Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div className="container-bottom">
          <button type="submit">Iniciar sesión</button>
          <div className="register-link">
            <p>
              No tienes una cuenta?{" "}
              <Link to="/signup">
                <strong>Registrate aquí</strong>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
