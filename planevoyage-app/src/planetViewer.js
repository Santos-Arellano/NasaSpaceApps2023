import React from 'react';
import './planetViewer.css';

const PlanetImage = ({ planetName, imagePath, onNextClick }) => {
  return (
    <div className="planet-image-container">
      <h2>{planetName}</h2>
      <img src={imagePath} alt={planetName} />
      <button onClick={onNextClick}>Siguiente planeta</button>
    </div>
  );
};

export default PlanetImage;