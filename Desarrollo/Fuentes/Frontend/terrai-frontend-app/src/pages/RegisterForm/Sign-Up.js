import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Sign-Up.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [bankInfo, setBankInfo] = useState("");
  const [option] = useState({
    BCP: {
      bank: "BCP",
      numberCard: 1526,
      mont: 15.9,
    },
    Interbank: {
      bank: "Interbank",
      numberCard: 1526,
      mont: 18.9,
    },
    Scotiabank: {
      bank: "Scotiabank",
      numberCard: 1526,
      mont: 20.9,
    },
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOptionSelected = (opc) => {
    console.log("Opcion seleccionada:", opc);
    setBankInfo(option[opc]);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Usuario registrado:", { name, email, password, bankInfo });
    navigate("/"); // Se dirige hacia al dashboard de Inicio
  };
  return (
    <div className="sign-up">
      <div className="container-header">
        <div className="logo">
          <img src='logo.svg' alt="Logo" />
        </div>
        <div className="container-text">
          <h1>Registrate aquí</h1>
          <p>Crea tu cuenta</p>
        </div>
      </div>
      <form onSubmit={handleSignUp}>
        <div className="container-body">
          <div className="input-box">
            <label>Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
          <div className="input-box">
            <label>Tarjeta de crédito</label>
            <div className="payment-methods">
              <button type="button" onClick={() => handleOptionSelected("BCP")}>
                BCP
              </button>
              <button
                type="button"
                onClick={() => handleOptionSelected("Interbank")}
              >
                Interbank
              </button>
              <button
                type="button"
                onClick={() => handleOptionSelected("BBVA")}
              >
                BBVA
              </button>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <button type="submit">Registrarse</button>
          <div className="login-link">
            <p>
              Ya tienes una cuenta?{" "}
              <Link to="/login">
                <strong>Inicia sesión aquí</strong>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
