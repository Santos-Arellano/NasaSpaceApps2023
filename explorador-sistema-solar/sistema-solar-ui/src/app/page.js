import React from 'react';

const planetas = [
  { id: 1, nombre: 'Mercurio', descripcion: 'El planeta más cercano al Sol.' },
  { id: 2, nombre: 'Venus', descripcion: 'Un planeta extremadamente caliente.' },
  { id: 3, nombre: 'Tierra', descripcion: 'Nuestro hogar, único en el sistema solar.' },
  // Agrega más planetas según sea necesario
];

function Planetas() {
  return (
    <div>
      <h1>Lista de Planetas</h1>
      <ul>
        {planetas.map((planeta) => (
          <li key={planeta.id}>
            <h2>{planeta.nombre}</h2>
            <p>{planeta.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planetas;
