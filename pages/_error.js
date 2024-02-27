
import React from 'react';


const CustomError = ({ statusCode }) => {

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
