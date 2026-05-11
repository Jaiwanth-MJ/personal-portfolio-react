import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = styled(motion.div)`
  width: 420px;
  padding: 2rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  margin: 10rem auto;
`;

const TimelineCheckpoint = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <Card
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      id={data.id}
      tabIndex={0}
      aria-labelledby={`${data.id}-title`}
    >
      <h2 id={`${data.id}-title`}>{data.title}</h2>
      <p>{data.description}</p>
    </Card>
  );
};

export default TimelineCheckpoint;