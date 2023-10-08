import React from 'react';

const PlanetDetails = ({ planet }) => {
  return (
    <div className="planet-details"> {/* Agrega una clase para los detalles */}
      <h2>{planet.name}</h2>
      <p>Diámetro: {planet.diameter}</p>
      <p>Masa: {planet.mass}</p>
      <p>Distancia al Sol: {planet.distanceToSun}</p>
      <p>Gravedad: {planet.gravity}</p>
      <p>Temperatura: {planet.temperature}</p>
      <p>Número de lunas: {planet.numberOfMoons}</p>
      {/* Agrega más detalles del planeta aquí */}
    </div>
  );
}

export default PlanetDetails;
