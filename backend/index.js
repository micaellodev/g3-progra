import express from 'express';
import cors from 'cors';
import { sequelize } from './config/database.js';
import { Categoria } from "./models/Categoria.js";
import { Producto } from "./models/Producto.js";
import { Usuario } from "./models/Usuario.js";
import { Orden } from "./models/Orden.js";
import { DetalleOrden } from "./models/DetalleOrden.js";
import { MetodoPago } from "./models/MetodoPago.js";
import { Pago } from "./models/Pago.js";
import { Carrito } from "./models/Carrito.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());


async function verifyAndSyncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Conexion exitosa con la BD");
  } catch (error) {
    console.log("Ocurrio un error con la conexion", error);
  }
}

// Conexión a la DB
try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
    await sequelize.sync(); // Crea tablas si no existen
} catch (error) {
    console.error('Error al conectar a la base de datos:', error);
}

// GET - Obtener todos los productos
app.get("/productos", async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// GET - Obtener un producto por ID
app.get("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al buscar producto" });
    }
});

// POST - Crear un nuevo producto
app.post("/productos", async (req, res) => {
    try {
        const { nombre, presentacion, descripcion, id_categoria, stock, precio, imagen } = req.body;
        const nuevoProducto = await Producto.create({
            nombre,
            presentacion,
            descripcion,
            id_categoria,
            stock,
            precio,
            imagen
        });
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: "Error al crear producto", detalles: error.message });
    }
});

// PUT - Actualizar un producto existente
app.put("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }

        const { nombre, presentacion, descripcion, id_categoria, stock, precio, imagen } = req.body;
        await producto.update({ nombre, presentacion, descripcion, id_categoria, stock, precio, imagen });

        res.json({ mensaje: "Producto actualizado", producto });
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar producto", detalles: error.message });
    }
});

// DELETE - Eliminar un producto
app.delete("/productos/:id", async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        await producto.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto" });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
    verifyAndSyncDatabase()
});
