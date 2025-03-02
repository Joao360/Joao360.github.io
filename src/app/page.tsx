// pages/index.js

import React from 'react';
import NavigationBar from './components/NavigationBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <NavigationBar />
      <AboutMe />
      <Experience />
      <Footer />
    </div>
  );
};

export default Home;
