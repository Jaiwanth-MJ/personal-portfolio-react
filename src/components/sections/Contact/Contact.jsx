import React from 'react';
import styled from 'styled-components';

import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiMapPin,
} from 'react-icons/fi';

const Container = styled.section`
  min-height: 70vh;

  padding: 6rem 8%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 3rem;

  margin-bottom: 1rem;

  color: #ffffff;
`;

const Subtitle = styled.p`
  max-width: 650px;

  color: rgba(255, 255, 255, 0.65);

  line-height: 1.8;

  margin-bottom: 4rem;

  font-size: 1.05rem;
`;

const ContactGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  gap: 2rem;
`;

const ContactCard = styled.a`
  position: relative;

  display: flex;

  align-items: center;

  gap: 1.5rem;

  padding: 1.8rem;

  border-radius: 24px;

  text-decoration: none;

  overflow: hidden;

  background: rgba(255, 255, 255, 0.04);

  border: 1px solid rgba(127, 90, 240, 0.3);

  backdrop-filter: blur(16px);

  transition:
    transform 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  box-shadow:
    0 0 12px rgba(127, 90, 240, 0.08),
    inset 0 0 12px rgba(127, 90, 240, 0.03);

  &:hover {
    transform: translateY(-8px);

    border-color: rgba(127, 90, 240, 0.9);

    box-shadow:
      0 0 20px rgba(127, 90, 240, 0.25),
      0 0 45px rgba(127, 90, 240, 0.18),
      0 0 80px rgba(127, 90, 240, 0.1);
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
      rgba(196, 181, 253, 0.25),
      rgba(127, 90, 240, 0.8)
    );

    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);

    -webkit-mask-composite: xor;

    pointer-events: none;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(127, 90, 240, 0.12);

  color: #c4b5fd;

  font-size: 1.5rem;

  box-shadow:
    0 0 20px rgba(127, 90, 240, 0.18);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: #ffffff;

    margin-bottom: 0.4rem;

    font-size: 1.1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.65);

    font-size: 0.95rem;
  }
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Title>Contact</Title>

      <Subtitle>
        Open to collaborations, innovative projects, and opportunities
        involving full-stack development, machine learning, and immersive
        digital experiences.
      </Subtitle>

      <ContactGrid>
        <ContactCard href="mailto:jaiwanthkumar20@gmail.com">
          <IconWrapper>
            <FiMail />
          </IconWrapper>

          <Info>
            <h3>Email</h3>
            <p>jaiwanthkumar20@gmail.com</p>
          </Info>
        </ContactCard>

        <ContactCard
          href="https://www.linkedin.com/in/mj-jaiwanth-2006j/"
          target="_blank"
          rel="noreferrer"
        >
          <IconWrapper>
            <FiLinkedin />
          </IconWrapper>

          <Info>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/mj-jaiwanth-2006j/</p>
          </Info>
        </ContactCard>

        <ContactCard
          href="https://github.com/Jaiwanth-MJ"
          target="_blank"
          rel="noreferrer"
        >
          <IconWrapper>
            <FiGithub />
          </IconWrapper>

          <Info>
            <h3>GitHub</h3>
            <p>github.com/Jaiwanth-MJ</p>
          </Info>
        </ContactCard>

        <ContactCard as="div">
          <IconWrapper>
            <FiMapPin />
          </IconWrapper>

          <Info>
            <h3>Location</h3>
            <p>Tirupur, Tamil Nadu, India</p>
          </Info>
        </ContactCard>
      </ContactGrid>
    </Container>
  );
};

export default Contact;