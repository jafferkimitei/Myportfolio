import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ParallaxProvider } from 'react-scroll-parallax';
import GlobalContext from './GlobalContext'; 
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, [setInitialRenderComplete]);

  if (!initialRenderComplete) return <></>;

  return (
    <>
      <GlobalContext.Provider value={global?.attributes}>
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </GlobalContext.Provider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
