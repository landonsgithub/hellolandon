import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Pages/Projects';
import Home from './components/Pages/Home';
import HeaderHome from './components/NavBarHeaderFooter/HeaderHome';
import Footer from './components/NavBarHeaderFooter/Footer'; 
import styles from './styles/Home.module.css';

function App() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <HeaderHome />
          <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/projects" element={<Projects />} />           
          </Routes>
          <Footer /> 
        </main>
      </div>
    </>
  )
}


export default App;






