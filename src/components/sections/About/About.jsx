import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  padding: 6rem 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  max-width: 800px;
  line-height: 1.8;
  color: #b8c1ec;
`;

const About = () => {
  return (
    <Container id="about">
      <Title>About Me</Title>

      <Text>
        CSE student at SKCT. I code to solve real problems, not chase trends. Passionate about building systems with 
        genuine impact—whether that's ML/AI for social good or tools that help communities.
        Driven by Dr. Kalam's vision: technology as a means for meaningful change. I learn deeply, ship projects, and engage honestly 
        with communities (technical events, hackathons, NPTEL coursework).
        Seeking roles where I can contribute substantively and build a stable foundation.I can provide and keep learning. 
        Impact matters more.
        Curious about systems that scale, AI applications beyond hype, and work that leaves something better behind.
      </Text>
    </Container>
  );
};

export default About;