import express from 'express';
import './src/databases/database.js';

console.log('esto es una prueba')

// 1 - configuraciones iniciales
const app = express();
// crear variable con express
app.set('port', process.env.PORT || 4000);
// 2 - middlewares
// 3 - creacion de rutas