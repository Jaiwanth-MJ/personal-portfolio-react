import React, { useState, memo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "Immersive Portfolio",
    description:
      "A cinematic developer portfolio built using React, Vite, Framer Motion, and Styled Components with immersive animations and futuristic UI design.",
    github: "https://github.com/",
    status: true,
  },

  {
    id: 2,
    name: "Customer Churn Prediction",
    description:
      "A machine learning system that predicts customer churn probability using intelligent classification models and behavioral analytics.",
    github: "https://github.com/",
    status: false,
  },

  {
    id: 3,
    name: "Movie Akinator",
    description:
      "An AI-powered movie recommendation system that understands user preferences through interactive questioning and recommendation logic.",
    github: "https://github.com/",
    status: false,
  },

  {
    id: 4,
    name: "Stock Price Trend Prediction",
    description:
      "A deep learning based stock forecasting system using LSTM neural networks and financial time-series analysis.",
    github: "https://github.com/",
    status: false,
  },
];

const Container = styled.section`
  min-height: 100vh;
  padding: 6rem 8%;

  contain: layout style paint;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #ffffff;
`;

const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 2rem;
`;

const Card = styled.div`
  position: relative;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "rgba(127, 90, 240, 0.7)"
        : "rgba(255, 70, 70, 0.25)"};

  border-radius: 22px;

  padding: 2rem;

  cursor: pointer;

  overflow: hidden;

  transform: translateZ(0);

  will-change: transform;

  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    box-shadow 0.22s ease;

  box-shadow: ${({ $active }) =>
    $active
      ? `
      0 0 12px rgba(127, 90, 240, 0.18)
    `
      : `
      0 0 8px rgba(255, 70, 70, 0.08)
    `};

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(127, 90, 240, 0.8);

    box-shadow:
      0 0 18px rgba(127, 90, 240, 0.16);
  }

  h3 {
    color: white;

    margin-bottom: 1rem;

    font-size: 1.4rem;
  }

  p {
    color: rgba(255, 255, 255, 0.68);

    line-height: 1.7;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;

  inset: 0;

  background: rgba(0, 0, 0, 0.72);

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 2000;
`;

const FocusCard = styled(motion.div)`
  width: min(680px, 92vw);

  background: #111117;

  border-radius: 28px;

  border: 1px solid rgba(127, 90, 240, 0.45);

  padding: 2.5rem;

  position: relative;

  box-shadow:
    0 0 25px rgba(127, 90, 240, 0.14);

  transform: translateZ(0);

  h2 {
    color: white;

    margin-bottom: 1.5rem;

    font-size: 2rem;
  }

  p {
    color: rgba(255, 255, 255, 0.72);

    line-height: 1.9;

    margin-bottom: 2rem;
  }

  a {
    color: #c4b5fd;

    text-decoration: none;

    font-weight: 600;
  }
`;

const CloseButton = styled.button`
  position: absolute;

  top: 1rem;
  right: 1rem;

  width: 40px;
  height: 40px;

  border: none;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: white;

  cursor: pointer;
`;

const ProjectCard = memo(({ project, onClick }) => {
  return (
    <Card
      $active={project.status}
      onClick={() => onClick(project)}
    >
      <h3>{project.name}</h3>

      <p>
        {project.description.slice(0, 100)}...
      </p>
    </Card>
  );
});

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <Container id="projects">
      <Title>Projects</Title>

      <Grid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </Grid>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <Overlay
            onClick={() => setSelectedProject(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <FocusCard
              onClick={(e) => e.stopPropagation()}
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 12,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <CloseButton
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </CloseButton>

              <h2>{selectedProject.name}</h2>

              <p>{selectedProject.description}</p>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </FocusCard>
          </Overlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Projects;