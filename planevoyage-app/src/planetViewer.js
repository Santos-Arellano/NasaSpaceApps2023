import React, { useState } from 'react';
import './planetViewer.css';
import PlanetDetails from './PlanetDetails';
import planetDetailsData from './planetDetails.json'; // Importa el archivo JSON

const planets = [
  { name: 'Mercury', imagePath: '/images/mercurio.png' },
  { name: 'Venus', imagePath: '/images/Venus.png' },
  { name: 'Earth', imagePath: '/images/earth.png' },
  // Agrega más planetas aquí
];

const PlanetViewer = () => {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false); // Estado para mostrar/ocultar detalles

  const nextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length);
    setShowDetails(false); // Oculta los detalles al cambiar de planeta
  };

  const previousPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + planets.length) % planets.length);
    setShowDetails(false); // Oculta los detalles al cambiar de planeta
  };

  const planet = planets[currentPlanetIndex];
  const planetDetails = planetDetailsData[planet.name]; // Obtiene los detalles del archivo JSON

  return (
    <div className="planet-viewer">
      <div
        className="planet-image-container"
        onMouseEnter={() => setShowDetails(true)} // Muestra detalles al pasar el mouse
        onMouseLeave={() => setShowDetails(false)} // Oculta detalles al retirar el mouse
      >
        <h2>{planet.name}</h2>
        <img src={planet.imagePath} alt={planet.name} />
        {showDetails && <PlanetDetails planet={planetDetails} />} {/* Muestra detalles si showDetails es true */}
      </div>
      <div className="planet-buttons">
        <button onClick={previousPlanet}>Previous</button>
        <button onClick={nextPlanet}>Next</button>
      </div>
    </div>
  );
};

export default PlanetViewer;
