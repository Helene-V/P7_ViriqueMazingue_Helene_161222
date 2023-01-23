import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import AccomodationSheet from './components/AccomodationSheet';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


function App() {
    return (
      <>
        <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/accueil" />} />
            <Route path="/accueil" element={<Home />} />
            <Route path="/fiche-logement" element={<AccomodationSheet />} />
            <Route path="/fiche-logement/:id" element={<AccomodationSheet />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </>
    )
}

export default App;

/*

import {data} from './data/data';

function App() {
    return (
      <>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" render={(props) => (
               <AccomodationSheet {...props} accomodations={data} />
                )} />
            <Route path="/a-propos" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        <Footer />
      </>
    )
}

*/