import React from 'react';

const PlanetDetails = ({ planet }) => {
  return (
    <div>
      <h2>{planet.name}</h2>
      <p>Diámetro: {planet.diameter}</p>
      <p>Masa: {planet.mass}</p>
      <p>Distancia al Sol: {planet.distanceToSun}</p>
      {/* Agrega más detalles del planeta aquí */}
    </div>
  );
}

export default PlanetDetails;
