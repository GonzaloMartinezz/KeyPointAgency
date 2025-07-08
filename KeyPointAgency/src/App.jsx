// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import SearchBar from './Components/SearchBar';
import FeaturedListings from './Components/FeaturedListings';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import './App.css'; // Estilos generales si los necesitas (puedes dejarlos simples)

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <SearchBar /> {/* La barra de búsqueda se superpone al hero */}
        <FeaturedListings />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;