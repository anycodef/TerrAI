import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Login from "./pages/Login";
import Sign_Up from "./pages/RegisterForm/Sign-Up";
import RegisterForm from "./pages/RegisterForm/Register";
import Monitor from "./pages/Monitor";
import logo from "./pages/Assets/terrAI.svg";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <div className="container-logo">
            <a href="/">
              <img src={logo} alt="Logo Terrai" className="app-logo" />
            </a>
          </div>

          <navbar className="links">
            <div className="body">
              <Link to="/">Inicio</Link>
              <Link to="/about">Acerca de</Link> {/* cambiar a Link */}
              <Link to="/contact">Contacto</Link> {/* cambiar a Link */}
            </div>

            <div className="monitor">
              <Link to="/to-monitor">Monitorear</Link>
            </div>
          </navbar>
          <div className="buttons">
            <Link to="/login">Iniciar sesión</Link>
            <RegisterButton />
          </div>
        </header>

        <main className="app-main-body">
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={RegisterForm} />
            <Route exact path="/register" Component={Sign_Up} />
            <Route exact path="/to-monitor" Component={Monitor} />
          </Routes>
        </main>

        <footer className="app-footer">
          <p>Footer</p>
        </footer>
      </div>
    </Router>
  );
}

function RegisterButton() {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/signup");
  };

  return (
    <button type="button" onClick={handleRegisterClick}>
      Registrarse
    </button>
  );
}

export default App;
