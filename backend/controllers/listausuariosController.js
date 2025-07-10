import { Usuario } from '../models/Usuario.js';
import { Orden } from '../models/Orden.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      order: [['createdAt', 'DESC']],
    });

    const usuariosFormateados = usuarios.map((u) => ({
      ...u.dataValues,
      id: u.id_usuario, // importante para que el frontend siga usando "id"
    }));

    res.status(200).json(usuariosFormateados);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Obtener detalle de un usuario por ID (incluye órdenes)
export const getUserById = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ where: { id_usuario: req.params.id } });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const ordenes = await Orden.findAll({
      where: { id_usuario: req.params.id },
      order: [['createdAt', 'DESC']],
    });

    const usuarioConOrdenes = {
      ...usuario.dataValues,
      id: usuario.id_usuario, // igual que arriba
      ordenes,
    };

    res.status(200).json(usuarioConOrdenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};
