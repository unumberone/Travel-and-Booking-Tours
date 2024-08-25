import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import { DataProvider } from './context/DataContext';
import Header from "./Components/Header/Nav";
import Home from './Components/Page/Home/Home';
import About from './Components/Page/About/About';
import Services from './Components/Page/Services/Service';
import Upcomming from './Components/Page/Upcomming/Upcomming';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <DataProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/upcomming' element={<Upcomming />} />
      </Routes>
      <Footer />
    </DataProvider>
  );
}

export default App;
