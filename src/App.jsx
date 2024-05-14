import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Contact from './pages/Contact';
import Who from './pages/Who';
import Services from './pages/Services';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who" element={<Who />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;