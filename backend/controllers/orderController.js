
import Order from '../models/Orden.js';
import User from '../models/Usuario.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate('user', 'name email') // trae info del usuario asociado
      .sort({ createdAt: -1 }); // más recientes primero

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener órdenes', error });
  }
};

// Obtener detalle de una orden
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden', error });
  }
};
