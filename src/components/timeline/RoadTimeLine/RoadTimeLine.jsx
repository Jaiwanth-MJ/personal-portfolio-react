import React, { useRef } from 'react';
import styled from 'styled-components';
import TimelineRoad from './TimelineRoad';
import TimelineCheckpoint from './TimelineCheckpoint';
import timelineData from '../../../data/timeline.json';

const Container = styled.section`
  min-height: 300vh;
  position: relative;
  padding: 10rem 0;
`;

const RoadTimeline = () => {
  const containerRef = useRef(null);

  return (
    <Container id="timeline" ref={containerRef}>
      <TimelineRoad />

      {timelineData.map((checkpoint, index) => (
        <TimelineCheckpoint
          key={checkpoint.id}
          data={checkpoint}
          index={index}
        />
      ))}
    </Container>
  );
};

export default RoadTimeline;