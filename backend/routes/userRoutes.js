import express from 'express';
import {
  getUsers,
  getUserDetail,
  toggleUserStatus,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  changePassword,
  recoverPassword,
  getUserProfile,
  verifyEmail
} from '../controllers/UsuarioController.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserDetail);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', loginUser);
router.put('/:id/cambiar-contrasena', changePassword);
router.post('/recuperar-contrasena', recoverPassword);
router.get('/:id/perfil', getUserProfile);
router.patch('/:id/status', toggleUserStatus);
router.get('/verificar-correo/:correo', verifyEmail);

export default router;