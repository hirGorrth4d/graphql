const {ProductoService} = require('../services/productoService');

const servicio = new ProductoService();
const agregarProducto = (args) => {
    const {titulo, descripcion} = args
    const producto = servicio.crearProducto({titulo, descripcion})
    return producto 
}

const obtenerProducto = () => {
    return servicio.obtenerProductos();
}

const eliminarProducto = () => {
    const id = servicio.eliminarProducto();
    return id
}

module.exports = {agregarProducto, obtenerProducto, eliminarProducto}