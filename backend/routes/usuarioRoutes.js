import express from 'express';
import { Usuario } from '../models/Usuario.js';

const router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalles: error.message });
  }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuario', detalles: error.message });
  }
});

// Crear un nuevo usuario
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, correo, contrasena, pais, ciudad, direccion, telefono, clinica } = req.body;
    
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      contrasena,
      pais,
      ciudad,
      direccion,
      telefono,
      clinica
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', detalles: error.message });
  }
});

// Actualizar datos del usuario
router.put('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const { nombre, apellido, correo, pais } = req.body;
    await usuario.update({ nombre, apellido, correo, pais });

    res.json({ mensaje: 'Perfil actualizado', usuario });
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario', detalles: error.message });
  }
});

// Cambiar contraseña
router.put('/:id/cambiar-contrasena', async (req, res) => {
  try {
    const { contrasenaActual, nuevaContrasena } = req.body;

    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    if (usuario.contrasena !== contrasenaActual) {
      return res.status(400).json({ error: 'La contraseña actual es incorrecta' });
    }

    await usuario.update({ contrasena: nuevaContrasena });

    res.json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al cambiar la contraseña', detalles: error.message });
  }
});

// Eliminar usuario
router.delete('/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    await usuario.destroy();
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario', detalles: error.message });
  }
});

export default router;
