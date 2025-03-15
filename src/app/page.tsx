// pages/index.js

import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Experience from '../components/Experience';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Contact from '@/components/Contact';

const Home = () => {
  return (
    <main className='bg-gray-100'>
      <NavigationBar />
      <AboutMe />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
