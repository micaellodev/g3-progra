// controllers/ProductController.js

import { Producto } from '../models/Producto.js';
import { Categoria } from '../models/Categoria.js';

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, imagen, idCategoria } = req.body;
    const nuevoProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      stock,
      imagen,
      categoryId: idCategoria
    });
    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error al crear el producto' });
  }
};

// Listar todos los productos (con su categoría)
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      include: [{ model: Categoria, as: 'category' }]
    });
    res.status(200).json(productos);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Obtener un producto por su ID
export const obtenerProductoPorId = async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id, {
      include: [{ model: Categoria, as: 'category' }]
    });
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    console.error('Error al obtener producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Actualizar un producto existente
export const actualizarProducto = async (req, res) => {
  try {
    const [filasActualizadas] = await Producto.update(req.body, {
      where: { id: req.params.id }
    });

    if (!filasActualizadas) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    const productoActualizado = await Producto.findByPk(req.params.id, {
      include: [{ model: Categoria, as: 'category' }]
    });
    res.status(200).json(productoActualizado);
  } catch (error) {
    console.error('Error al actualizar producto:', error);
    res.status(500).json({ error: 'Error al actualizar el producto' });
  }
};

// Eliminar un producto
export const eliminarProducto = async (req, res) => {
  try {
    const filasEliminadas = await Producto.destroy({
      where: { id: req.params.id }
    });

    if (!filasEliminadas) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.status(204).send(); // Sin contenido
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    res.status(500).json({ error: 'Error al eliminar el producto' });
  }
};
