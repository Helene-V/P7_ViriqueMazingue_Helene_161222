import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AccomodationSheet from './components/AccomodationSheet';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import './App.css';


function App() {
    return (
      <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fiche-logement" element={<AccomodationSheet />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </>
    )
}

export default App;
