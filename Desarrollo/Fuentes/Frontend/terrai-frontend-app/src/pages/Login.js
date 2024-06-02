import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Imprime en consola los credenciales ingresadas por el usuario
    console.log("Email:", email);
    console.log("Password:", password);

    // Credenciales predefinidas
    const validEmail = "admin@example.com";
    const validPassword = "123456789";

    // Verifica las credenciales
    if (email === validEmail && password === validPassword) {
      navigate("/"); // Al dahsboard Inicio
    } else {
      setErrorMessage("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };
  return (
    <div className="login">
      <div className="container-header">
        <div className="logo">
          <img src='logo.svg' alt="Logo" />
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
              <Link to="/register">
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
