// controllers/listausuariosController.js
import { Usuario } from '../models/Usuario.js';
import { Orden } from '../models/Orden.js';

// GET - todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(); // sin ordenar por createdAt

    // Adaptar salida: agregar campos "estado" y "foto" por defecto
    const usuariosFormateados = usuarios.map(u => ({
      id: u.id_usuario,
      nombre: `${u.nombre} ${u.apellido}`,
      correo: u.correo,
      estado: 'Activo', // valor por defecto
      foto: null         // sin imagen real
    }));

    res.json(usuariosFormateados);
  } catch (error) {
    console.error('Error getAllUsers:', error.message);
    res.status(500).json({ error: 'Error al obtener usuarios', detalles: error.message });
  }
};

// GET - usuario por ID con órdenes
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await Usuario.findOne({ where: { id_usuario: req.params.id } }); //

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const ordenes = await Orden.findAll({
      where: { id_usuario: usuario.id_usuario },
      order: [['createdAt', 'DESC']], // solo si tu modelo Orden tiene createdAt
    });

    res.json({
      id: usuario.id_usuario,
      nombre: `${usuario.nombre} ${usuario.apellido}`,
      correo: usuario.correo,
      estado: 'Activo', // default
      foto: null,       // default
      ordenes,
    });
  } catch (error) {
    console.error('Error getUserById:', error.message);
    res.status(500).json({ error: 'Error al obtener el usuario', detalles: error.message });
  }
};
