import express from 'express';
import { getAllOrders, getOrderById } from '../controllers/listaordenesController.js';

const router = express.Router();

// Ruta para obtener todas las órdenes
router.get('/', getAllOrders);

// Ruta para obtener una orden por ID
router.get('/:id', getOrderById);

export default router;
