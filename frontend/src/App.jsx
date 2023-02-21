import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import About from './pages/About/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Les routes avec React JS v6
function App() {
    return (
      <>
        <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/accueil" />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </>
    )
}

export default App;