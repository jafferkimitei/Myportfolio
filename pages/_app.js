
import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';
import React from 'react';

 function MyApp({ Component, pageProps }) {
   return <Component {...pageProps} />
 }
 MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

 export default MyApp;