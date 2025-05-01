import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ClientsPage from './pages/ClientsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import TrainingsPage from './pages/services/TrainingsPage';
import SupportPage from './pages/services/SupportPage';
import AIPage from './pages/services/AIPage';
import BusinessPage from './pages/services/BusinessPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services">
              <Route index element={<Navigate to="/services/trainings" replace />} />
              <Route path="trainings" element={<TrainingsPage />} />
              <Route path="support" element={<SupportPage />} />
              <Route path="ai" element={<AIPage />} />
              <Route path="business" element={<BusinessPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ToastContainer position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;