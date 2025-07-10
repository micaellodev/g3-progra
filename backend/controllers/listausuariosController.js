import { Usuario } from '../models/Usuario.js';
import { Orden } from '../models/Orden.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      order: [['createdAt', 'DESC']],
    });

    // Sequelize ya devuelve con id
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Obtener detalle de un usuario por ID, incluyendo sus órdenes
export const getUserById = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id, {
      include: [{ model: Orden }],
    });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};
