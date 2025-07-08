import express from 'express';

import {
  getUsers,
  getUserDetail,
  toggleUserStatus
} from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserDetail);
router.patch('/:id/status', toggleUserStatus);

export default router;
