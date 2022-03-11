import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Projects from './components/Pages/Projects';
import Home from './components/Pages/Home';
import HeaderHome from './components/NavBarHeaderFooter/HeaderHome';
import Footer from './components/NavBarHeaderFooter/Footer'; 


function App() {
  return (
    <>
      <HeaderHome />
      <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="/projects" element={<Projects />} />          
      </Routes>
      <Footer />   
    </>
  )
}


export default App;






