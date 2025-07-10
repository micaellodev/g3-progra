import express from 'express';
import { getAllUsers, getUserById } from '../controllers/listausuariosController.js';

const router = express.Router();

// Lista de usuarios con formato especial
router.get('/', getAllUsers);

// Detalle de usuario por ID (con órdenes, etc.)
router.get('/:id', getUserById);

export default router;
