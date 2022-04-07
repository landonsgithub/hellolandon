import React from 'react';
import Resume from './Resume';
import About from './About';
import HeaderHome from '../NavBarHeaderFooter/HeaderHome';

const Home = () => {
  return (
    <>
      < HeaderHome />
      < About />
      < Resume />
    </>
  );
};

export default Home;
