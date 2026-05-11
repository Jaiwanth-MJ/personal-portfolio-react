import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const TimelineRoad = () => {
  return (
    <Svg viewBox="0 0 1200 3000" preserveAspectRatio="none">
      <path
        d="M 600 0
           C 200 300, 1000 700, 600 1000
           S 200 1700, 700 2200
           S 1000 2700, 500 3000"
        stroke="#7F5AF0"
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
        style={{
          filter: 'drop-shadow(0 0 14px #7F5AF0)',
        }}
      />
    </Svg>
  );
};

export default TimelineRoad;