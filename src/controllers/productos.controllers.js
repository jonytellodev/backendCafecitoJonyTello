import Producto from "../models/producto.js";

export const listarProductos = (req, res) =>{
    try {
        res.send('esto es una pruebita')
        //ir a la bd y pedir los productos
    } catch (error) {
        console.log(error)        
    }
}

export const crearProducto = async (req, res) =>{
    try {
        //ir a la base de datos y pedir los productos
        // aqui los datos deberian estar validados
        console.log(req.body)
        const productoNuevo = new Producto(req.body);
        //guardar info en base de datos
        await productoNuevo.save();
                res.status(201).json({
            mensaje: "El producto fue creaco correctamente"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            mensaje: "El producto no pudo ser creado"
        })     
    }
}