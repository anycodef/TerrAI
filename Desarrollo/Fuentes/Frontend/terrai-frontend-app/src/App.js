import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUp from "./pages/RegisterForm/Sign-Up";
import RegisterForm from "./pages/RegisterForm/Register";

function App() {
  return (
    <Router>
      <div className='App'>

        <header className='app-header'>
          <a href='/'>
            <img src='logo.svg' alt='Logo Terrai' className='app-logo'/>
          </a>
          
          <nav className='navigation'>
            <ul className='main-option option'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
            <ul className='right-option option'>
              <li><Link to='/login'>Log in</Link></li>
              <li><Link to='/Signup'>Sign up</Link></li>
            </ul>
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
