// ScreenSizeDisplay.js
import React, { useState, useEffect } from 'react';

function ScreenSizeDisplay() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="screen-size-display">
      <p>Current screen width: {screenWidth}px</p>
    </div>
  );
}

export default ScreenSizeDisplay;
