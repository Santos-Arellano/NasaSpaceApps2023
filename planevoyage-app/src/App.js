import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import PlanetViewer from './planetViewer.js';
import PlanetDetails from './PlanetDetails';

const planets = [
  { name: 'Mercury', imagePath: '/images/mercurio.png', diameter: '4,880 km', mass: '330,104,000,000,000 billion kg', distanceToSun: '57.91 million km'},
  { name: 'Venus', imagePath: '/images/Venus.png', diameter: '12,104 km', mass: '4,867,320,000,000,000 billion kg', distanceToSun: '108.2 million km' },
  { name: 'Earth', imagePath: '/images/earth.png', diameter: '12,742 km', mass: '5,972,190,000,000,000 billion kg', distanceToSun: '149.6 million km' },
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
    <Router>
      <div className="App">
        <Route path="/" exact>
          <PlanetViewer
            planetName={planets[currentPlanetIndex].name}
            imagePath={planets[currentPlanetIndex].imagePath}
          />
          <button onClick={nextPlanet}>Siguiente planeta</button>
          <ul>
            {planets.map((planet, index) => (
              <li key={index}>
                <Link to={`/planet/${planet.name}`}>{planet.name}</Link>
              </li>
            ))}
          </ul>
    </Route>
        {planets.map((planet, index) => (
          <Route
            key={index}
            path={`/planet/${planet.name}`}
            render={() => <PlanetDetails planet={planet} />}
          />
        ))}
      </div>
      </Router>
  );
}

export default App;
