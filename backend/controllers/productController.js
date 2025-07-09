import { Producto } from '../models/Producto.js';
import { Categoria } from '../models/Categoria.js';

export const createProduct = async (req, res) => {
  try {
    const { nombre, presentacion, descripcion, stock, precio, imagen, categoria } = req.body;
    
    // Validar que todos los campos requeridos estén presentes
    if (!nombre || !presentacion || !descripcion || stock === undefined || !precio) {
      return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const newProduct = await Producto.create({ 
      nombre, 
      presentacion, 
      descripcion, 
      stock: parseInt(stock), 
      precio: parseFloat(precio), 
      imagen: imagen || null 
    });
    
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Error creating product' });
  }
}

export const getProducts = async (req, res) => {
  try {
    const products = await Producto.findAll({
      include: [{ model: Categoria, as: 'categoria' }]
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const getProductById = async (req, res) => {
  try {
    const product = await Producto.findByPk(req.params.id, {
      include: [{ model: Categoria, as: 'categoria' }]
    });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Producto.update(req.body, {
      where: { id_producto: id }
    });
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    const product = await Producto.findByPk(id);
    res.status(200).json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Producto.destroy({
      where: { id_producto: id }
    });
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json({ message: 'Product deleted', id });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 