import React, { useState } from 'react';
import './App.css';
import PlanetViewer from './planetViewer.js';

const planets = [
  { name: 'Mercury', imagePath: '/images/mercurio.png'},
  { name: 'Venus', imagePath: '/images/Venus.png' },
  { name: 'Earth', imagePath: '/images/earth.png' },
  { name: 'Mars', imagePath: '/images/Mars.png' },
  { name: 'Jupiter', imagePath: '/images/Jupiter.png' },
  { name: 'Saturn', imagePath: '/images/saturno.png' },
  { name: 'Uranus', imagePath: '/images/urano.png' },
  { name: 'Neptune', imagePath: '/images/neptuno.png' },
  // Agrega el resto de los planetas aquí
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
