import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import Contact from './pages/Contact';
import Who from './pages/Who';
import Services from './pages/Services';
import Directory from './pages/Directory';
import Experiences from './pages/Experiences';
import Dashboard from './pages/Dashboard';
import 'tailwindcss/tailwind.css';
import CommonComponents from './CommonComponents';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />

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