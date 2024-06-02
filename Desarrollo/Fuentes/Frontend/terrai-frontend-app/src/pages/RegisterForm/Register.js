import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../Assets/terrAI.svg";

const RegisterForm = () => {
  const [company, setCompany] = useState("");
  const [ruc, setRUC] = useState("");
  const navigate = useNavigate();

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };

  const handleRUCChange = (e) => {
    setRUC(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Empresa:", company);
    console.log("RUC:", ruc);

    navigate("/Sign-Up"); // Se dirige hacia la siguiente venta Sign-Up para que el usuario llene otros campos
  };

  return (
    <div className="register">
      <div className="container-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="container-text">
          <h1>Registrate aquí</h1>
          <p>Crea tu cuenta</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container-body">
          <div className="input-box">
            <label>Empresa</label>
            <input
              type="text"
              placeholder="Empresa"
              value={company}
              onChange={handleCompanyChange}
              required
            />
          </div>
          <div className="input-box">
            <label>RUC</label>
            <input
              type="number"
              placeholder="RUC"
              value={ruc}
              onChange={handleRUCChange}
              required
            />
          </div>
        </div>
        <div className="container-bottom">
          <button type="submit">Siguiente</button>
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

export default RegisterForm;
