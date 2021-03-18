import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <h1><Link id="logo" to="/">Capture</Link> </h1>
        <ul>
          <li>
            <Link to="/">1. About Us</Link>
          </li>
          <li>
            <Link to="/work">2. Our Work</Link>
          </li>
          <li>
            <Link to="/contact">3. Contact Us</Link>
          </li>
        </ul>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    padding-top: 1.5rem;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  h1 {
    padding-top: 1rem;
  }
  #logo {
    font-size: 2rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }

  
`

export default Nav;
