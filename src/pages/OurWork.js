import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';


const OurWork = () => {
  return (
    <Work>
      <Movie>
        <div className="line"></div>
        <Link to="/work/the-athlete">
        <h2>The athlete</h2>
          <img src={athlete} alt="athlete"/>
        </Link>
      </Movie>
      <Movie>
        <div className="line"></div>
        <Link  to="/work/the-racer">
          <h2>The Racer</h2>
          <img src={theracer} alt="theracer"/>
        </Link>
      </Movie>
      <Movie>
        <div className="line"></div>
        <Link  to="/work/good-times">
          <h2>Good Times</h2>
          <img src={goodtimes} alt="goodtimes"/>
        </Link>
      </Movie>
    </Work>
  )
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }

`
const Movie = styled.div`
  padding-bottom: 10rem;
 a {
  text-decoration: none;
  color: black;
 }
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export default OurWork