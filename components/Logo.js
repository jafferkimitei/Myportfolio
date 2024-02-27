
import React from 'react';
import PropTypes from 'prop-types';

const LogoImage = ({ svgContent }) => {
  return (
    <div className="logo">
      <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
        {svgContent}
      </svg>
    </div>
  );
};

Logo.propTypes = {
  svgContent: PropTypes.node.isRequired,
};

export default LogoImage;
