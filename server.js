const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.use('/data', express.static(path.join(__dirname, 'data')));

app.get('/api/:file', (req, res) => {
  const fileName = req.params.file;
  const filePath = path.join(__dirname, 'data', `${fileName}.json`);

  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).json({ error: 'Archivo no encontrado' });
    }
  });
});

app.get('/', (req, res) => {
  res.send('API de Votaciones - Proyecto Hemiciclo');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
