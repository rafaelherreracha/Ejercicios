const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// GET: Todas las películas
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

// GET: Por ID
router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const movie = await Movie.findById(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
});

// GET: Por Título
router.get('/title/:title', async (req, res, next) => {
  const { title } = req.params;
  try {
    const movie = await Movie.find({ title: new RegExp(title, 'i') });
    return res.status(200).json(movie);
  } catch (error) {
    return next(error);
  }
});

// GET: Por Género
router.get('/genre/:genre', async (req, res, next) => {
  const { genre } = req.params;
  try {
    const movies = await Movie.find({ genre: new RegExp(genre, 'i') });
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

// GET: Mayores a un año concreto (o a partir de 2010)
router.get('/year/:year', async (req, res, next) => {
  const { year } = req.params;
  try {
    const movies = await Movie.find({ year: { $gte: Number(year) } });
    return res.status(200).json(movies);
  } catch (error) {
    return next(error);
  }
});

// POST: Crear película
router.post('/', async (req, res, next) => {
  try {
    const newMovie = new Movie(req.body);
    const createdMovie = await newMovie.save();
    return res.status(201).json(createdMovie);
  } catch (error) {
    return next(error);
  }
});

// PUT: Modificar película
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ message: 'Película no encontrada para actualizar' });
    }
    return res.status(200).json(updatedMovie);
  } catch (error) {
    return next(error);
  }
});

// DELETE: Eliminar película
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return res.status(404).json({ message: 'Película no encontrada para eliminar' });
    }
    return res.status(200).json({ message: 'Película eliminada con éxito', movie: deletedMovie });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;