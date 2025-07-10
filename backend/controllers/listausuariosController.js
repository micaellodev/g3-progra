import Usuario from '../models/Usuario.js';
import Orden from '../models/Orden.js';

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.find().sort({ createdAt: -1 });

    // Mapea los usuarios y reemplaza _id por id (sin modificar el modelo)
    const usuariosFormateados = usuarios.map((u) => ({
      ...u.toObject(),
      id: u._id.toString(), // asegura que sea string
    }));

    res.status(200).json(usuariosFormateados);
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

    const usuarioConOrdenes = {
      ...usuario.toObject(),
      id: usuario._id.toString(), // mismo patrón: usar id como string
      ordenes,
    };

    res.status(200).json(usuarioConOrdenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};
