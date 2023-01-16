import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import CardDetails from './pages/card-detalise/CardDetails';
import Cardlist from './pages/card-list/Cardlist';
import Editcard from './pages/edit-card/Editcard';
import './mybootstrp.scss'
import MyNavbar from './components/navbar/Mynav';
import Myfooter from './components/footer/Myfooter';
import Notfoud from './components/404/Notfoud';
import About from './components/about/About';
function App() {

  return (
    <>
      <MyNavbar />

      <Routes>
        <Route path="/" element={<Cardlist />} />
        <Route path="/cards" element={<Cardlist />} />
        <Route path="/cards/edit/:id" element={<Editcard />} />
        <Route path="/cards/details/:id" element={<CardDetails />} />
        <Route path="/Notfoud" element={<Notfoud />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Myfooter />
    </>
  );
}

export default App;
