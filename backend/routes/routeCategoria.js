import express from 'express';
import {
  getCategorias,
  getCategoriaById,
  postCategoria,
  putCategoria,
  deleteCategoria
} from '../controllers/CategoriaController.js';

const router = express.Router();

router.get('/', getCategorias);
router.get('/:id', getCategoriaById);
router.post('/', postCategoria);
router.put('/:id', putCategoria);
router.delete('/:id', deleteCategoria);

export default router;
