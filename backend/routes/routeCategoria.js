import express from "express";
import {
  getCategorias,
  postCategoria,
  deleteCategoria,
  putCategoria
} from "../controllers/CategoriaController.js";

const router = express.Router();

router.get("/", getCategorias);
router.post("/", postCategoria);
router.delete("/:id", deleteCategoria);
router.put("/:id", putCategoria);

export default router;
