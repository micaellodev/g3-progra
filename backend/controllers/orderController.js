
import { Orden } from '../models/Orden.js';
import { Usuario } from '../models/Usuario.js';
import { DetalleOrden } from '../models/DetalleOrden.js';
import { Producto } from '../models/Producto.js';
import { Pago } from '../models/Pago.js';

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

// Crear una nueva orden completa
export const createOrder = async (req, res) => {
  try {
    const { 
      id_usuario, 
      productos, 
      direccion, 
      metodo_pago, 
      total 
    } = req.body;

    // Validar que el usuario existe
    const usuario = await Usuario.findByPk(id_usuario);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Validar stock disponible antes de crear la orden
    for (const item of productos) {
      const producto = await Producto.findByPk(item.id_producto);
      if (!producto) {
        return res.status(404).json({ error: `Producto ${item.id_producto} no encontrado` });
      }
      if (producto.stock < item.cantidad) {
        return res.status(400).json({ 
          error: `Stock insuficiente para ${producto.nombre}. Disponible: ${producto.stock}, Solicitado: ${item.cantidad}` 
        });
      }
    }

    // Crear la orden
    const nuevaOrden = await Orden.create({
      id_usuario,
      fecha: new Date(),
      total,
      estado: 'pendiente'
    });

    // Crear los detalles de la orden y actualizar stock
    const detallesCreados = [];
    for (const item of productos) {
      // Crear detalle de orden
      const detalle = await DetalleOrden.create({
        id_orden: nuevaOrden.id_orden,
        id_producto: item.id_producto,
        cantidad: item.cantidad,
        precio_unitario: item.precio
      });
      detallesCreados.push(detalle);

      // Actualizar stock del producto
      const producto = await Producto.findByPk(item.id_producto);
      producto.stock = Math.max(0, producto.stock - item.cantidad);
      await producto.save();
    }

    // Crear registro de pago
    const pago = await Pago.create({
      id_orden: nuevaOrden.id_orden,
      id_metodo_pago: metodo_pago,
      monto: total,
      estado: 'completado'
    });

    // Actualizar estado de la orden
    await nuevaOrden.update({ estado: 'completada' });

    res.status(201).json({
      mensaje: 'Orden creada exitosamente',
      orden: nuevaOrden,
      detalles: detallesCreados,
      pago: pago
    });

  } catch (error) {
    console.error('Error al crear orden:', error);
    res.status(500).json({ 
      error: 'Error al crear la orden', 
      detalles: error.message 
    });
  }
};
