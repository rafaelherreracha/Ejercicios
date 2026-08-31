const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/proyecto-basico-express-movies';

const connect = async () => {
  try {
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`Conectado con éxito a la DB: ${name} en ${host}`);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
};

module.exports = { connect, DB_URL };