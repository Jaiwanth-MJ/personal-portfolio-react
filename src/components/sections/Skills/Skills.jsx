import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  padding: 6rem 8%;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(127, 90, 240, 0.35);

  padding: 2rem;

  border-radius: 22px;

  backdrop-filter: blur(14px);

  overflow: hidden;

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  box-shadow:
    0 0 10px rgba(127, 90, 240, 0.08),
    inset 0 0 12px rgba(127, 90, 240, 0.03);

  color: #ffffff;

  font-size: 1.1rem;
  font-weight: 500;

  cursor: pointer;

  &:hover {
    transform: translateY(-6px);

    border-color: rgba(127, 90, 240, 0.9);

    box-shadow:
      0 0 18px rgba(127, 90, 240, 0.25),
      0 0 45px rgba(127, 90, 240, 0.18),
      0 0 80px rgba(127, 90, 240, 0.12);
  }

  &::before {
    content: '';

    position: absolute;

    inset: 0;

    border-radius: inherit;

    padding: 1px;

    background: linear-gradient(
      135deg,
      rgba(127, 90, 240, 0.8),
      rgba(196, 181, 253, 0.3),
      rgba(127, 90, 240, 0.8)
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;

    pointer-events: none;
  }
`;

const Skills = () => {
  const skills = [
    'Python',
    'C++',
    'Java',
    'MySQL',
    'React',
    'Spring Boot',
    'Scikit-learn',
    'Numpy & Pandas',
    'Git',
  ];

  return (
    <Container id="skills">
      <Title>Skills</Title>

      <Grid>
        {skills.map((skill) => (
          <Card key={skill}>{skill}</Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;