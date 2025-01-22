// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import WorkshopDetail from './components/WorkshopDetail';
import NotFound from './pages/NotFound';

const App = () => (
  <Router>
    <Header />
    <title>q-works</title>  {/* Set page title */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/workshop/:id" element={<WorkshopDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
