import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Socials from '../components/Socials';
import {projectData} from '../data/ProjectData';

const Home = () => {
  return (
    <>
      <Hero/>
      <About />
      <Socials />
      <Projects picturecard={projectData} /> 
      <Skills />
      <Contact />
    </>
  );
};

export default Home;