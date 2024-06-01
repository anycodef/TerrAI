import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
