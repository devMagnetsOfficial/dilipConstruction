import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './Layout/Layout';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Gallery from './pages/Gallery';
import RatePage from './pages/RatePage';
export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/rate' element={<RatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

// Simple NotFoundPage component, you can customize this
function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light text-dark p-6">
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="mt-6 text-accent-gold hover:underline">Go back Home</a>
    </div>
  );
}
