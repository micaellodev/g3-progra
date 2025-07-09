
import { Orden } from '../models/Orden.js';
import { Usuario } from '../models/Usuario.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Orden.findAll({
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['nombre', 'apellido', 'correo']
        }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener órdenes', error: error.message });
  }
};

// Obtener detalle de una orden
export const getOrderById = async (req, res) => {
  try {
    const order = await Orden.findByPk(req.params.id, {
      include: [
        {
          model: Usuario,
          as: 'usuario',
          attributes: ['nombre', 'apellido', 'correo']
        }
      ]
    });
    
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la orden', error: error.message });
  }
};
