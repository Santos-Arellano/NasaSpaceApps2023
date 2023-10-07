// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./database');

// Define las rutas y controladores aquí

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});


// server.js
// ... (código previo)

// Ruta para listar todos los planetas
app.get('/planetas', (req, res) => {
    // Aquí puedes utilizar SQLite para consultar la base de datos y obtener la lista de planetas
    db.all('SELECT * FROM planetas', (err, planetas) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener la lista de planetas' });
      }
      return res.json(planetas);
    });
  });
  
  // Ruta para obtener detalles de un planeta específico
  app.get('/planeta/:id', (req, res) => {
    const { id } = req.params;
    // Utiliza SQLite para buscar el planeta por ID en la base de datos y obtener sus detalles
    db.get('SELECT * FROM planetas WHERE id = ?', [id], (err, planeta) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener los detalles del planeta' });
      }
      if (!planeta) {
        return res.status(404).json({ error: 'Planeta no encontrado' });
      }
      return res.json(planeta);
    });
  });
  
  // ... (más rutas y controladores)
  // server.js
const axios = require('axios');

// ... (código previo)

// Ruta para interactuar con ChatGPT
app.post('/chat', async (req, res) => {
  const { pregunta } = req.body;

  try {
    // Utiliza la API de OpenAI para enviar la pregunta a ChatGPT y obtener una respuesta
    const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-002/completions', {
      prompt: pregunta,
      max_tokens: 150,
    }, {
      headers: {
        Authorization: `Bearer TU_API_KEY_DE_OPENAI`,
        'Content-Type': 'application/json',
      },
    });

    const respuesta = response.data.choices[0].text;

    return res.json({ respuesta });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error al interactuar con ChatGPT' });
  }
});

// ... (más rutas y controladores)
