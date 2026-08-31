const express = require('express');
const { connect } = require('./utils/db');

const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');

connect();

const PORT = 3000;
const server = express();

// Middlewares para parsear JSON y URL-encoded
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Enrutado
server.use('/movies', movieRoutes);
server.use('/cinemas', cinemaRoutes);

// Control de rutas inexistentes (404)
server.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  return next(error);
});

// Controlador de errores global (500)
server.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Error inesperado del servidor');
});

server.listen(PORT, () => {
  console.log(`Servidor levantado y escuchando en http://localhost:${PORT}`);
});