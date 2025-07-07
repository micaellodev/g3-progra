import express from "express";
import {
  getCategorias,
  postCategorias,
  deleteCategorias,
  putCategoria,
  getAllCategories,
} from "../controllers/CategoriaController.js";

const router = express.Router();

router.get("/", getCategorias);
router.post("/", postCategorias);
router.get("/", getAllCategories);

router.delete("/:id", deleteCategorias);
router.put("/:id", putCategoria);

export default router;
