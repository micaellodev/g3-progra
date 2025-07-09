
import { Carrito } from "../models/Carrito.js";
import { Producto } from "../models/Producto.js";
import { Usuario } from "../models/Usuario.js";

export const getCarritoByUser = async (req, res) => {
  const { id_usuario } = req.params;
  try {
    const items = await Carrito.findAll({
      where: { id_usuario },
      include: [
        {
          model: Producto,
          attributes: ["id_producto", "nombre", "precio", "imagen"]
        }
      ]
    });
    return res.status(200).json(items);
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};


export const addToCart = async (req, res) => {
  const { id_usuario, id_producto, cantidad } = req.body;
  try {
    const existente = await Carrito.findOne({
      where: { id_usuario, id_producto }
    });

    if (existente) {
      existente.cantidad += cantidad;
      await existente.save();
      return res.status(200).json(existente);
    }

    const nuevoItem = await Carrito.create({
      id_usuario,
      id_producto,
      cantidad
    });
    return res.status(201).json(nuevoItem);
  } catch (error) {
    console.error("Error al añadir al carrito:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const updateCarrito = async (req, res) => {
  const { id_carrito } = req.params;
  const { cantidad } = req.body;
  try {
    const item = await Carrito.findByPk(id_carrito);
    if (!item) {
      return res.status(404).json({ error: "Ítem no encontrado" });
    }
    item.cantidad = cantidad;
    await item.save();
    return res.status(200).json(item);
  } catch (error) {
    console.error("Error al actualizar el carrito:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const removeFromCart = async (req, res) => {
  const { id_carrito } = req.params;
  try {
    const eliminado = await Carrito.destroy({
      where: { id_carrito }
    });
    if (!eliminado) {
      return res.status(404).json({ error: "Ítem no encontrado" });
    }
    return res.status(204).send(); 
  } catch (error) {
    console.error("Error al eliminar del carrito:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
