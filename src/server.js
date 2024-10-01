const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, '../public')));

// Server Startup
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
