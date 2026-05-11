import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  padding: 2rem;
  text-align: right;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Footer = () => {
  return (
    <Container>
      Jaiwanth MJ     II-CSE      Sri Krishna College of Technology
    </Container>
  );
};

export default Footer;