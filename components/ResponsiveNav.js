// ResponsiveNavbar.js
import React, { useState, useEffect } from 'react';
import DesktopNav from './DesktopNav'; 
import MobileNavbar from './MobileNav';
import { useMediaQuery } from 'react-responsive';

const ResponsiveNavbar = () => {
    const [isMobile, setIsMobile] = useState(useMediaQuery({ maxWidth: 768 }));
  useEffect(() => {
    const handleResize = () => {
      // Update the state based on the window width
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
          <MobileNavbar/>
      ) : (
        <DesktopNav />
      )}
    </div>
  );
};

export default ResponsiveNavbar;
