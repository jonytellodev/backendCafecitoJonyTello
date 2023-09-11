import Producto from "../models/producto"

export const listarProductos = (req, res) =>{
    try {
        //ir a la bd y pedir los productos
    } catch (error) {
        console.log(error)        
    }
    res.send('esto es una pruebita')
}
