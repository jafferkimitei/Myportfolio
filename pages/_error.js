
import React from 'react';
import Maintenance from '../components/Maintenance';

const CustomError = ({ statusCode }) => {
  if (statusCode === 503) {
    // Render the maintenance page if the status code is 503
    return <Maintenance />;
  }

  // Render a generic error message for other status codes
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>Error {statusCode}</h1>
      <p>Something went wrong. Please try again later.</p>
    </div>
  );
};

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
