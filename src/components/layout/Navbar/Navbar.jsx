import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: transparent;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-family: 'PinyonScript';
  font-size: 1.7rem;
  letter-spacing: 2px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  a {
    position: relative;

    text-decoration: none;

    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: 1px;

    color: rgba(255, 255, 255, 0.78);

    transition:
      color 0.35s ease,
      text-shadow 0.35s ease;

    &:hover {
      color: #ffffff;

      text-shadow:
        0 0 10px rgba(127, 90, 240, 0.45),
        0 0 25px rgba(127, 90, 240, 0.25);
    }

    &::after {
      content: '';

      position: absolute;

      left: 0;
      bottom: -6px;

      width: 0%;
      height: 2px;

      border-radius: 999px;

      background: linear-gradient(
        90deg,
        #7f5af0,
        #c4b5fd,
        #ffffff
      );

      box-shadow:
        0 0 10px rgba(127, 90, 240, 0.5),
        0 0 20px rgba(127, 90, 240, 0.25);

      transition: width 0.35s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav initial={{ y: -100 }} animate={{ y: 0 }}>
      <Logo>MJ</Logo>

      <NavLinks>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#timeline">Journey</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;