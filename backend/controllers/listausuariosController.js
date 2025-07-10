// controllers/listausuariosController.js
import { Usuario } from '../models/Usuario.js';
import { Orden } from '../models/Orden.js';

// GET - todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({ order: [['createdAt', 'DESC']] });

    // Mapear para adaptar a { id, nombre, estado, foto, ... }
    const usuariosFormateados = usuarios.map(u => ({
      id: u.id_usuario,
      nombre: u.nombre,
      estado: u.estado,
      correo: u.correo,
      foto: u.foto,
    }));

    res.json(usuariosFormateados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalles: error.message });
  }
};

// GET - usuario por ID con órdenes
export const getUserById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id_usuario);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const ordenes = await Orden.findAll({
      where: { id_usuario: usuario.id_usuario },
      order: [['createdAt', 'DESC']],
    });

    res.json({
      id: usuario.id_usuario,
      nombre: usuario.nombre,
      estado: usuario.estado,
      correo: usuario.correo,
      foto: usuario.foto,
      ordenes,
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario', detalles: error.message });
  }
};
