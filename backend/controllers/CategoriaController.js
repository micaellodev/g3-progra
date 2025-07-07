import { Categoria } from "../models/Categoria.js";

export const getCategorias = async (req, res) => {
    try {
      const categorias = await Categoria.findAll();
      res.status(200).json(categorias);
    } catch (error) {
      console.error('Error al obtener categorías:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };
  
  export const postCategoria = async (req, res) => {
    try {
      const { nombre, descripcion } = req.body;
      const nuevaCategoria = await Categoria.create({ nombre, descripcion });
      res.status(201).json(nuevaCategoria);
    } catch (error) {
      console.error('Error al crear categoría:', error);
      res.status(500).json({ error: 'Error al crear categoría' });
    }
  };

const putCategoria = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await db.Category.update(req.body, {
        where: { id }
      });
      if (updated) {
        const categoria = await db.Category.findByPk(id);
        return res.status(200).json(categoria);
      }
      res.status(404).json({ error: 'Categoría no encontrada' });
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor (PUT)' });
    }
  };
  


const getCategoriaById = async (req, res) => {
    try {
      const { id } = req.params;
      const categoria = await db.Category.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ error: 'Categoría no encontrada' });
      }
      res.status(200).json(categoria);
    } catch (error) {
      console.error('Error al obtener la categoría:', error);
      res.status(500).json({ error: 'Error interno del servidor (GET ID)' });
    }
  };

  module.exports = {
    getCategorias,
    postCategorias,
    deleteCategorias,
    getCategoriaById,
    putCategoria
  };