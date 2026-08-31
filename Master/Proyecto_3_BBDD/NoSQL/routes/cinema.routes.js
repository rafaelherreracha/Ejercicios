const express = require('express');
const Cinema = require('../models/Cinema');
const router = express.Router();

// GET: Todos los cines (con populate de películas)
router.get('/', async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate('movies');
    return res.status(200).json(cinemas);
  } catch (error) {
    return next(error);
  }
});

// GET: Cine por ID
router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findById(id).populate('movies');
    if (!cinema) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }
    return res.status(200).json(cinema);
  } catch (error) {
    return next(error);
  }
});

// POST: Crear cine
router.post('/', async (req, res, next) => {
  try {
    const newCinema = new Cinema(req.body);
    const createdCinema = await newCinema.save();
    return res.status(201).json(createdCinema);
  } catch (error) {
    return next(error);
  }
});

// PUT: Modificar cine (o añadir películas a su cartelera)
router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedCinema = await Cinema.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCinema) {
      return res.status(404).json({ message: 'Cine no encontrado' });
    }
    return res.status(200).json(updatedCinema);
  } catch (error) {
    return next(error);
  }
});

// DELETE: Eliminar cine
router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedCinema = await Cinema.findByIdAndDelete(id);
    if (!deletedCinema) {
      return res.status(404).json({ message: 'Cine no encontrado para eliminar' });
    }
    return res.status(200).json({ message: 'Cine eliminado con éxito', cinema: deletedCinema });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;