import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUp from "./pages/RegisterForm/SignUp";
import RegisterForm from "./pages/RegisterForm/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <a href="/" className="logo-terrai">
          <img src="logo.svg" alt="Logo Terrai" />
        </a>

        <header>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>
              <Link to="/Signup">Sign up</Link>
            </li>
          </nav>
        </header>

        <main>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/signup" Component={Signup} />
            <Route exact path="/sign-up" Component={SignUp} /> # Se dirige hacia
            la ruta signup después de register
            <Route exact path="/register" Component={RegisterForm} /> # Registra
            datos iniciales, luego, se dirige a /sign-up
          </Routes>
        </main>

        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
