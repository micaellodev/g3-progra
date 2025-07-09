import Usuario from '../models/Usuario.js';
import Orden from '../models/Orden.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.find().sort({ createdAt: -1 });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener usuarios', error });
  }
};

// Obtener detalle de un usuario por ID, incluyendo sus órdenes
export const getUserById = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const ordenes = await Orden.find({ usuario: usuario._id }).sort({ createdAt: -1 });

    // Convertimos a objeto plano y agregamos ordenes
    const usuarioConOrdenes = {
      ...usuario.toObject(),
      ordenes,
    };

    res.status(200).json(usuarioConOrdenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};
