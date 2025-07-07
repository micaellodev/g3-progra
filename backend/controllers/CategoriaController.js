// controllers/CategoriaController.js

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

export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const categoria = await Categoria.findByPk(id);
    if (!categoria) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al obtener la categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor (GET ID)' });
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

export const putCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Categoria.update(req.body, {
      where: { id_categoria: id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    const categoria = await Categoria.findByPk(id);
    res.status(200).json(categoria);
  } catch (error) {
    console.error('Error al actualizar la categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor (PUT)' });
  }
};

export const deleteCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Categoria.destroy({
      where: { id_categoria: id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Categoría no encontrada' });
    }
    res.status(200).json({ mensaje: 'Categoría eliminada', id });
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    res.status(500).json({ error: 'Error interno del servidor (DELETE)' });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Categoria.findAll();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}