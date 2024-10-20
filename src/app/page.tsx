// pages/index.js

import React from 'react';
import NavigationBar from './components/NavigationBar';
import Experience from './components/Experience';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const Home = () => {
  return (
    <main>
      <NavigationBar />
      <AboutMe />
      <Experience />
      <Footer />
    </main>
  );
};

export default Home;
