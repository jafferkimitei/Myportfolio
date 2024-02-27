
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const removeChildElement = () => {
      const parentElement = document.getElementById('parent');
      const childElement = document.getElementById('child');

      if (parentElement && childElement && parentElement.contains(childElement)) {
        parentElement.removeChild(childElement);
      }
    };

    // Attach the event listener when the component mounts
    const button = document.getElementById('removeButton');
    if (button) {
      button.addEventListener('click', removeChildElement);
    }

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      if (button) {
        button.removeEventListener('click', removeChildElement);
      }
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div>
      <div id="parent">
        <div id="child">Child Element</div>
      </div>
      <button id="removeButton">Remove Child Element</button>
    </div>
  );
};

export default MyComponent;
