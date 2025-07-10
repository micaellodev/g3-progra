// routes/listausuariosRoutes.js
import express from 'express';
import { getAllUsers, getUserById } from '../controllers/listausuariosController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id_usuario', getUserById); // usar id_usuario como nombre del param

export default router;
