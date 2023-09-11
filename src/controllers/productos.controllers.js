import Producto from "../models/producto.js";

export const listarProductos = (req, res) =>{
    try {
        res.send('esto es una pruebita')
        //ir a la bd y pedir los productos
    } catch (error) {
        console.log(error)        
    }
}

export const crearProducto = (req, res) =>{
    try {
        console.log(req)
        console.log(req.body)
        res.send('producto creado')
    } catch (error) {
        console.log(error)        
    }
}