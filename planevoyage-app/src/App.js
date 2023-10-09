// App.js
import React, { useState } from 'react';
import './App.css';
import PlanetViewer from './planetViewer';

const planets = [
  { name: 'Mercury', imagePath: '/images/mercurio.png', description: 'The closest planet to the Sun.' },
  { name: 'Venus', imagePath: '/images/Venus.png', description: 'An extremely hot planet with a thick atmosphere.' },
  { name: 'Earth', imagePath: '/images/earth.png', description: 'Our home, the only known planet with life.' },
];

function App() {
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  const nextPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length);
  };

  const previousPlanet = () => {
    setCurrentPlanetIndex((prevIndex) => (prevIndex - 1 + planets.length) % planets.length);
  };

  const planet = planets[currentPlanetIndex];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Planetary Tourism</h1>
        <p>Explore the Solar System</p>
      </header>
      <PlanetViewer
        planetName={planet.name}
        imagePath={planet.imagePath}
        description={planet.description}
        onNextClick={nextPlanet}
        onPreviousClick={previousPlanet}
      />
    </div>
  );
}

export default App;
