import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Container = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #050816 0%,
    #0b1020 50%,
    #050816 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  overflow: hidden;
  position: relative;
`;

const GlowOrb = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  background: rgba(127, 90, 240, 0.18);
  filter: blur(120px);
  border-radius: 50%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;

  text-align: center;
  max-width: 900px;
`;

const ErrorCode = styled(motion.h1)`
  font-size: clamp(6rem, 18vw, 14rem);
  font-weight: 900;
  line-height: 1;

  background: linear-gradient(
    135deg,
    #ffffff,
    #7f5af0,
    #2cb67d
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 0 0 40px rgba(127, 90, 240, 0.4);
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-top: 1rem;
  margin-bottom: 1.5rem;
`;

const Description = styled(motion.p)`
  color: #94a1b2;
  font-size: 1.1rem;
  line-height: 1.8;

  max-width: 650px;
  margin: 0 auto 3rem auto;
`;

const HomeButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 2.5rem;

  border-radius: 16px;

  background: linear-gradient(
    135deg,
    #7f5af0,
    #6246ea
  );

  color: white;
  font-weight: 600;

  transition: all 0.3s ease;

  box-shadow:
    0 0 20px rgba(127, 90, 240, 0.35),
    0 0 60px rgba(127, 90, 240, 0.15);

  &:hover {
    transform: translateY(-4px) scale(1.03);

    box-shadow:
      0 0 30px rgba(127, 90, 240, 0.55),
      0 0 80px rgba(127, 90, 240, 0.25);
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);

  background-size: 80px 80px;

  mask-image: radial-gradient(circle at center, black 30%, transparent 85%);
`;

const NotFound = () => {
  return (
    <Container>
      <GlowOrb />

      <GridOverlay />

      <Content
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ErrorCode
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          404
        </ErrorCode>

        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Lost In The Digital Void
        </Title>

        <Description
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for does not exist or may
          have drifted into another dimension. Let’s guide you
          back to the immersive experience.
        </Description>

        <HomeButton
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Return Home
        </HomeButton>
      </Content>
    </Container>
  );
};

export default NotFound;