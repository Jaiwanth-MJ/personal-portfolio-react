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
        I’m a passionate developer with a strong foundation in React and Spring Boot,
         driven by a deep curiosity for Machine Learning and Artificial Intelligence. 
         I enjoy exploring how intelligent systems work, from neural networks and recommendation systems
         to deep learning concepts and real-world AI applications. 
         Alongside web development, I’m constantly learning emerging technologies and building a strong 
         understanding of both software engineering and modern AI. I’m enthusiastic about creating impactful, 
         future-driven solutions that combine creativity, logic, and innovation.
      </Text>
    </Container>
  );
};

export default About;