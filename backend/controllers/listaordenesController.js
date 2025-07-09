import Orden from '../models/Orden.js';
import Usuario from '../models/Usuario.js';

// Obtener todas las órdenes (para ListaOrdenes)
export const getAllOrders = async (req, res) => {
  try {
    const ordenes = await Orden.find()
      .populate('usuario', 'nombre') // trae nombre del cliente
      .sort({ createdAt: -1 });

    const resultado = ordenes.map((orden) => ({
      id: orden._id,
      usuario: orden.usuario?.nombre || 'Sin nombre',
      fecha: orden.createdAt.toISOString().split('T')[0],
      total: orden.total,
      estado: orden.estado,
      productos: orden.productos,
    }));

    res.status(200).json(resultado);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener órdenes', error });
  }
};

// Obtener detalle de una orden
export const getOrderById = async (req, res) => {
  try {
    const orden = await Orden.findById(req.params.id)
      .populate('usuario', 'nombre email')
      .populate('productos.producto');

    if (!orden) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    const detalle = {
      id: orden._id,
      estado: orden.estado,
      total: orden.total,
      usuario: orden.usuario?.nombre || 'Usuario desconocido',
      productos: orden.productos.map((p) => ({
        id: p.producto._id,
        nombre: p.producto.nombre,
        categoria: p.producto.categoria, // si está embebido
        cantidad: p.cantidad,
        precio: p.precioUnitario,
      })),
    };

    res.status(200).json(detalle);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden', error });
  }
};
