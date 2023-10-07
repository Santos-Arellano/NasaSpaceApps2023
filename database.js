// database.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('sistema_solar.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS planetas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      descripcion TEXT
    )
  `);
  // Puedes agregar más tablas para otros objetos del sistema solar si es necesario
});

module.exports = db;
