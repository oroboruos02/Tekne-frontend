import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginClient from './pages/LoginClient';
import LoginAdmin from './pages/LoginAdmin';
import RegisterForm from './pages/RegisterForm';
import Contact from './pages/Contact';
import Who from './pages/Who';
import Services from './pages/Services';
import Directory from './pages/Directory';
import Experiences from './pages/Experiences';
import Dashboard from './pages/Dashboard';
import StarRating from './components/StarRating';
import 'tailwindcss/tailwind.css';
import CommonComponents from './CommonComponents';

function App() {
  const setUser = (user) => {
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Proporciona la función setUser al componente LoginForm */}
        <Route path="/login" element={<LoginClient setUser={setUser} />} />
        <Route path="/admin" element={<LoginAdmin setUser={setUser} />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/starrating" element={<StarRating />} />

        <Route element={ <CommonComponents /> }>
          <Route path="/who" element={<Who />} />
          <Route path="/services" element={<Services />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/experiences" element={<Experiences />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;