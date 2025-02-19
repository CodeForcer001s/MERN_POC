import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div className='jegan'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/help-desk">Help Desk</Link>
            </li>
          </ul>
        </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      
    </Router>
  );
};

export default App;