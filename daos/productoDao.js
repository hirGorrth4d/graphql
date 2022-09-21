const productos = new Map();
class ProductoDao {
    obtenerProductoPorId(id){
        return productos.get(id);
    }
    obtenerProductos() {
        return Array.from(productos.values())
    }
    guardarProducto(prod){
        const newId = productos.size + 1;
        prod.id = newId;
        prod.set(prod.id, prod)
    }
    eleminarProducto(prod) {
        productos.delete(prod.id);
    }
}

module.exports = {ProductoDao}