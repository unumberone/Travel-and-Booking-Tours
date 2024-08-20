import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { DataProvider } from './context/DataContext';
import Header from "./Components/Header/Nav";
import Home from './Components/Page/Home/Home';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
