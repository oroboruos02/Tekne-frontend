import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import RefProvider from './context/RefContext';
import 'tailwindcss/tailwind.css';
import Loader from './components/Loader'; // Importa el componente de carga

// Lazy load de las páginas
const Home = lazy(() => import('./pages/Home'));
const LoginClient = lazy(() => import('./pages/LoginClient'));
const LoginAdmin = lazy(() => import('./pages/LoginAdmin'));
const RegisterForm = lazy(() => import('./pages/RegisterForm'));
const RegisterClient = lazy(() => import('./pages/RegisterClient'));
const Contact = lazy(() => import('./pages/Contact'));
const Who = lazy(() => import('./pages/Who'));
const Services = lazy(() => import('./pages/Services'));
const Directory = lazy(() => import('./pages/Directory'));
const Experiences = lazy(() => import('./pages/Experiences'));
const DashboardAdmin = lazy(() => import('./pages/DashboardAdmin'));
const DashboardClient = lazy(() => import('./pages/DashboardClient'));
const RatingCompany = lazy(() => import('./components/RatingCompany'));
const StarRating = lazy(() => import('./components/StarRating'));
const CommonComponents = lazy(() => import('./CommonComponents'));

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  return (
    <HelmetProvider>
      <RefProvider>
        <Router>
          {/* Suspense envolviendo las rutas con el nuevo Loader */}
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginClient setUser={setUser} />} />
              <Route path="/admin" element={<LoginAdmin setUser={setUser} />} />
              <Route path="/registerAdmin" element={<RegisterForm />} />
              <Route path="/registerclient" element={<RegisterClient />} />

              {/* Rutas protegidas */}
              <Route path="/dashboardadmin" element={<DashboardAdmin />} />
              <Route path="/dashboardclient" element={<DashboardClient />} />

              {/* Componentes individuales */}
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
          </Suspense>
        </Router>
      </RefProvider>
    </HelmetProvider>
  );
}

export default App;
