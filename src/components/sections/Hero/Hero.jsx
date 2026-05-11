import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 8%;
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 7rem);
  line-height: 1;
  max-width: 900px;
`;

const Subtitle = styled(motion.p)`
  max-width: 700px;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.2rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Title
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Building immersive digital experiences and intelligent systems.
      </Title>

      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ML & AI Engineer • Full Stack Developer
      </Subtitle>
    </HeroContainer>
  );
};

export default Hero;