import express from 'express';
import { DetalleOrden } from '../models/DetalleOrden.js';

const router = express.Router();

// Obtener todos los detalles de órdenes
router.get('/', async (req, res) => {
  try {
    const detalles = await DetalleOrden.findAll();
    res.json(detalles);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener detalles de órdenes', detalles: error.message });
  }
});

// Obtener un detalle por ID
router.get('/:id', async (req, res) => {
  try {
    const detalle = await DetalleOrden.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de orden no encontrado' });
    res.json(detalle);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar detalle de orden', detalles: error.message });
  }
});

// Crear un nuevo detalle
router.post('/', async (req, res) => {
  try {
    const { ordenId, productoId, cantidad, precio } = req.body;
    
    if (!ordenId || !productoId || !cantidad || !precio) {
      return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    
    const nuevoDetalle = await DetalleOrden.create({ 
      ordenId, 
      productoId, 
      cantidad: Number(cantidad),
      precio: Number(precio)
    });
    
    res.status(201).json(nuevoDetalle);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear detalle de orden', detalles: error.message });
  }
});

// Actualizar un detalle
router.put('/:id', async (req, res) => {
  try {
    const detalle = await DetalleOrden.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de orden no encontrado' });
    
    const { ordenId, productoId, cantidad, precio } = req.body;
    await detalle.update({ 
      ordenId: ordenId || detalle.ordenId,
      productoId: productoId || detalle.productoId,
      cantidad: cantidad ? Number(cantidad) : detalle.cantidad,
      precio: precio ? Number(precio) : detalle.precio
    });
    
    res.json({ mensaje: 'Detalle de orden actualizado', detalle });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar detalle de orden', detalles: error.message });
  }
});

// Eliminar un detalle
router.delete('/:id', async (req, res) => {
  try {
    const detalle = await DetalleOrden.findByPk(req.params.id);
    if (!detalle) return res.status(404).json({ error: 'Detalle de orden no encontrado' });
    
    await detalle.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar detalle de orden', detalles: error.message });
  }
});

export default router;
