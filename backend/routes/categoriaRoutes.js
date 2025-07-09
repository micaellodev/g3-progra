import express from 'express';

const router = express.Router();

import {
    getCategorias,
    getCategoriaById,
    postCategoria,
    putCategoria,
    deleteCategoria
  } from '../controllers/CategoriaController.js';
router.get('/:id', getCategoriaById);
router.post('/', postCategoria);
router.put('/:id', putCategoria);
router.delete('/:id', deleteCategoria);
export default router;
