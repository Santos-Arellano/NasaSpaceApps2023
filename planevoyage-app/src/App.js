import React, { useState } from 'react';
import './App.css';
import PlanetViewer from './planetViewer';

const planets = [
  { name: 'Mercury', imagePath: '/images/mercurio.png' },
  { name: 'Venus', imagePath: '/images/Venus.png' },
  { name: 'Earth', imagePath: '/images/earth.png' },
];

function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const nextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  return (
    <div className="App">
      <PlanetViewer
        planetName={planets[currentPlanetIndex].name}
        imagePath={planets[currentPlanetIndex].imagePath}
        onNextClick={nextPlanet} // Pasa la función nextPlanet al componente
      />
    </div>
  );
}

export default App;
