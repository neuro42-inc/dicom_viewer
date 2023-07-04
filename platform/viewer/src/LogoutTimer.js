import React, { useState, useEffect } from 'react';

export const LogoutTimer = () => {
  const [isScreensaverActive, setScreensaverActive] = useState(false);
  //console.log('screensaver!');
  useEffect(() => {
    let timer;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setScreensaverActive(true);
      }, 2000); // Set the inactivity time after which the screensaver is activated (in milliseconds)
    };

    const handleUserActivity = () => {
      setScreensaverActive(false);
      resetTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    resetTimer();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
    };
  }, []);
  //
  if (isScreensaverActive) {
    console.log('Timer up, logging out.');
    // inject log out code:

    return <div className="screensaver">{/* Logout */}</div>;
  }

  // Regular application content
  return <div>{/* Your app content */}</div>;
};
