const {ProductoDao} = require('../daos/productoDao');
const {Producto} = require('../domain/productos');

class ProductoService {
    constructor() {
        this.dao = new ProductoDao()
    }

    crearProducto({titulo, descripcion}) {
        const producto = new Producto(null, titulo, descripcion)
        this.dao.guardarProducto(producto)
        return producto
    }
    obtenerProductos() {
        return this.dao.obtenerProductos();
    }
    eliminarProducto() {
        const producto = this.dao.obtenerProductos();
        const id = producto.filter(prod => prod.id)
        id.forEach((prod) => {
            this.dao.eliminarProducto(prod)
        })
        return id
    }
}

module.exports = {ProductoService}