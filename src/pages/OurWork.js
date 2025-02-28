import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import {
    pageAnimation,
    fade, photoAnim,
    lineAnim,
    slider,
    slider2,
    sliderContainer
  } from '../animation';
  import {useScroll} from '../components/useScroll';
  


const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (

        <Work
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          style={{background: "#fff"}}>
            <motion.div variants={sliderContainer}>
              <Frame1 variants={slider}></Frame1>
              <Frame2 variants={slider}></Frame2>
              <Frame3 variants={slider}></Frame3>
              <Frame4 variants={slider}></Frame4>
            </motion.div>
         
          <Movie>
            <motion.h2 variants={fade} >The athlete</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/the-athlete">
            <Hide>
              <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
            </Hide>
            </Link>
          </Movie>
          <Movie ref={element} variants={fade} animate={controls} initial="hidden">
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link  to="/work/the-racer">
              <motion.h2>The Racer</motion.h2>
              <img src={theracer} alt="theracer"/>
            </Link>
          </Movie>
          <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
            <motion.div variants={lineAnim} className="line" className="line"></motion.div>
            <Link  to="/work/good-times">
              <h2>Good Times</h2>
              <img src={goodtimes} alt="goodtimes"/>
            </Link>
          </Movie>
        </Work>
   
  )
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }

`
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  overflow: hidden;
 a {
  text-decoration: none;
  color: black;
 }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  height: 100vh;
  width: 100%;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`
export default OurWork;