import React, { useRef } from 'react';
import styled from 'styled-components';
import TimeLineRoad from './TimeLineRoad';
import TimeLineCheckpoint from './TimeLineCheckpoint';
import timelineData from '../../../data/timeline.json';

const Container = styled.section`
  min-height: 300vh;
  position: relative;
  padding: 10rem 0;
`;

const RoadTimeLine = () => {
  const containerRef = useRef(null);

  return (
    <Container id="timeline" ref={containerRef}>
      <TimeLineRoad />

      {timelineData.map((checkpoint, index) => (
        <TimeLineCheckpoint
          key={checkpoint.id}
          data={checkpoint}
          index={index}
        />
      ))}
    </Container>
  );
};

export default RoadTimeLine;