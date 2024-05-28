import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LoginClient from './pages/LoginClient';
import LoginAdmin from './pages/LoginAdmin';
import RegisterForm from './pages/RegisterForm';
import RegisterClient from './pages/RegisterClient';
import Contact from './pages/Contact';
import Who from './pages/Who';
import Services from './pages/Services';
import Directory from './pages/Directory';
import Experiences from './pages/Experiences';
import DashboardAdmin from './pages/DashboardAdmin';
import DashboardClient from './pages/DashboardClient';
import RatingCompany from './components/RatingCompany';
import StarRating from './components/StarRating';
import 'tailwindcss/tailwind.css';
import CommonComponents from './CommonComponents';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginClient setUser={setUser} />} />
        <Route path="/admin" element={<LoginAdmin setUser={setUser} />} />
        <Route path="/registerAdmin" element={<RegisterForm />} />
        <Route path="/registerclient" element={<RegisterClient />} />
        

        {/* Rutas protegidas basadas en el rol */}
        <Route path="/dashboardadmin" element={ <DashboardAdmin /> } />
        <Route path="/dashboardclient" element={ <DashboardClient /> } />

        {/* Componentes individuales (si realmente son necesarios en las rutas) */}
        <Route path="/ratingcompany" element={<RatingCompany />} />
        <Route path="/starrating" element={<StarRating />} />

        <Route element={<CommonComponents />}>
          <Route path="/who" element={<Who />} />
          <Route path="/services" element={<Services />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;