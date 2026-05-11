import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
    };
  }, []);

  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        position: 'fixed',
        left: position.x,
        top: position.y,
        background: '#7F5AF0',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
        zIndex: 9999,
      }}
    />
  );
};

export default CustomCursor;