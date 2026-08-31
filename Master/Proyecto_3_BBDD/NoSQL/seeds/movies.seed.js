const mongoose = require('mongoose');
const Movie = require('../models/Movie');
const { DB_URL } = require('../utils/db');

const movies = [
  { title: 'The Matrix', director: 'Hermanas Wachowski', year: 1999, genre: 'Acción' },
  { title: 'The Matrix Reloaded', director: 'Hermanas Wachowski', year: 2003, genre: 'Acción' },
  { title: 'Buscando a Nemo', director: 'Andrew Stanton', year: 2003, genre: 'Animación' },
  { title: 'Buscando a Dory', director: 'Andrew Stanton', year: 2016, genre: 'Animación' },
  { title: 'Interestelar', director: 'Christopher Nolan', year: 2014, genre: 'Ciencia ficción' },
  { title: '50 primeras citas', director: 'Peter Segal', year: 2004, genre: 'Comedia romántica' },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find();
    if (allMovies.length) {
      await Movie.collection.drop();
      console.log('Colección Movies eliminada correctamente');
    }
  })
  .catch((err) => console.log(`Error eliminando datos: ${err}`))
  .then(async () => {
    await Movie.insertMany(movies);
    console.log('Películas añadidas con éxito');
  })
  .catch((err) => console.log(`Error insertando películas: ${err}`))
  .finally(() => mongoose.disconnect());