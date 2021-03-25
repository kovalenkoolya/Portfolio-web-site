import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import FaqSection from '../components/FaqSection';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';;

const AboutUs = () => {
  return (
   <About
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </About>
  );
};

const About = styled(motion.div)`
 min-height: 100vh;
 `

export default AboutUs;