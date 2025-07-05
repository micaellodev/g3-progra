import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

function crearProducto(id,nombre, stock, precio, ){
const obj = {id,nombre,stock,precio}
obj["Estado"]="Disponible";

return obj;
}

const listadoProductos = [
    crearProducto("1", "Producto 1", 10, 100),  
    crearProducto("2", "Producto 2", 5, 200),
    crearProducto("3", "Producto 3", 0, 300),
]

function borrarProducto(id){
    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex !== -1) {
        productos.splice(productoIndex, 1);
        return true;
    }
    return false;
}
//obtener un producto específico
app.get("/productos/:id", (req, res) => {
    const producto = obtenerProductoPorId(req.params.id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

//crear un nuevo producto
app.post("/productos", (req, res) => {
    const { id, nombre, stock, precio } = req.body;
    const nuevoProducto = crearProducto(id, nombre, stock, precio);
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

//actualizar un producto existente
app.put('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = productos.find(p => p.id === id);
    if (!producto) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    const { nombre, stock, precio } = req.body;
    if (nombre !== undefined) producto.nombre = nombre;
    if (stock !== undefined) producto.stock = stock;
    if (precio !== undefined) producto.precio = precio;

    res.json({ mensaje: "Producto actualizado", producto });
});

app.delete("/productos/:id", (req, res) => {
    const id = req.params.id;
    const productoEliminado = borrarProducto(id);
    if (productoEliminado) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: "Producto no encontrado" });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

/* Hola esto un comentario */




