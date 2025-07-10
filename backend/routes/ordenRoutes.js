import express from 'express';
import { Orden } from '../models/Orden.js';

const router = express.Router();

// Obtener todas las órdenes
router.get('/', async (req, res) => {
  try {
    const ordenes = await Orden.findAll();
    res.json(ordenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener órdenes', detalles: error.message });
  }
});

// Obtener una orden por ID
router.get('/:id', async (req, res) => {
  try {
    const orden = await Orden.findByPk(req.params.id);
    if (!orden) return res.status(404).json({ error: 'Orden no encontrada' });
    res.json(orden);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar orden', detalles: error.message });
  }
});

// Crear una nueva orden
router.post('/', async (req, res) => {
  try {
    const { usuarioId, total, estado } = req.body;
    const nuevaOrden = await Orden.create({ 
      usuarioId, 
      total,
      estado: estado || 'pendiente',
      fecha: new Date()
    });
    res.status(201).json(nuevaOrden);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear orden', detalles: error.message });
  }
});

// Actualizar una orden
router.put('/:id', async (req, res) => {
  try {
    const orden = await Orden.findByPk(req.params.id);
    if (!orden) return res.status(404).json({ error: 'Orden no encontrada' });
    
    const { usuarioId, total, estado } = req.body;
    await orden.update({ 
      usuarioId, 
      total,
      estado: estado || orden.estado
    });
    
    res.json({ mensaje: 'Orden actualizada', orden });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar orden', detalles: error.message });
  }
});

// Eliminar una orden
router.delete('/:id', async (req, res) => {
  try {
    const orden = await Orden.findByPk(req.params.id);
    if (!orden) return res.status(404).json({ error: 'Orden no encontrada' });
    
    await orden.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar orden', detalles: error.message });
  }
});

export default router;
