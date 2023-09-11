import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config'; // permite procesar variables de entorno
import productoRouter from './src/routes/productos.routes.js';
import usuarioRouter from './src/routes/usuarios.routes.js';
import './src/databases/database.js';

// 1 - configuraciones iniciales
const app = express();
// crear variable con express
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'), ()=>{
    console.log('estoy en el puerto '+ app.get('port'))
})
// 2 - middlewares: funciones para hacer una tarea especifica antes de llegar a las rutas, que se pueden traer de librerias externas.

app.use(cors()); // backend ya puede recibir conexiones remotas
app.use(express.json()); // traduce datos de las solicitudes en formato json
app.use(express.urlencoded({extended:true})); // ayuda a interpretar datos del body del request
app.use(morgan('dev')) // nos da mas informacion en la terminal

// 3 - creacion de rutas
// http://localhost:4000/api/producto

app.use('/api', productoRouter);
app.use('/api', usuarioRouter);

// tarea: crear una ruta y controlador para los usuarios