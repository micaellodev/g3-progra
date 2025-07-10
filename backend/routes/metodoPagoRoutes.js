import express from 'express';
import { MetodoPago } from '../models/MetodoPago.js';

const router = express.Router();

// Obtener todos los métodos de pago
router.get('/', async (req, res) => {
  try {
    const metodos = await MetodoPago.findAll();
    res.json(metodos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener métodos de pago', detalles: error.message });
  }
});

// Obtener un método de pago por ID
router.get('/:id', async (req, res) => {
  try {
    const metodo = await MetodoPago.findByPk(req.params.id);
    if (!metodo) return res.status(404).json({ error: 'Método de pago no encontrado' });
    res.json(metodo);
  } catch (error) {
    res.status(500).json({ error: 'Error al buscar método de pago', detalles: error.message });
  }
});

// Crear un nuevo método de pago
router.post('/', async (req, res) => {
  try {
    const { nombre, descripcion, activo } = req.body;
    
    if (!nombre) {
      return res.status(400).json({ error: 'El nombre es obligatorio' });
    }
    
    const nuevoMetodo = await MetodoPago.create({ 
      nombre,
      descripcion: descripcion || null,
      activo: activo !== undefined ? activo : true
    });
    
    res.status(201).json(nuevoMetodo);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear método de pago', detalles: error.message });
  }
});

// Actualizar un método de pago
router.put('/:id', async (req, res) => {
  try {
    const metodo = await MetodoPago.findByPk(req.params.id);
    if (!metodo) return res.status(404).json({ error: 'Método de pago no encontrado' });
    
    const { nombre, descripcion, activo } = req.body;
    await metodo.update({ 
      nombre: nombre || metodo.nombre,
      descripcion: descripcion !== undefined ? descripcion : metodo.descripcion,
      activo: activo !== undefined ? activo : metodo.activo
    });
    
    res.json({ mensaje: 'Método de pago actualizado', metodo });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar método de pago', detalles: error.message });
  }
});

// Eliminar un método de pago
router.delete('/:id', async (req, res) => {
  try {
    const metodo = await MetodoPago.findByPk(req.params.id);
    if (!metodo) return res.status(404).json({ error: 'Método de pago no encontrado' });
    
    await metodo.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar método de pago', detalles: error.message });
  }
});

export default router;
