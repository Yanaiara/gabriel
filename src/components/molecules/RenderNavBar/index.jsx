import React, { useState, useEffect } from 'react';
import { NavBar } from '../../organisms/NavBar';
import NavBarMenu from '../../organisms/NavBarMenu';

export const RenderNavBar = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {windowSize.width > 760 ? <NavBar /> : <NavBarMenu />}
    </>
  );
};

export default RenderNavBar;
