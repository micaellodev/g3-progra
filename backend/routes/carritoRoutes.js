import express from "express";
import {
  getCarritoByUser,
  addToCart,
  updateCarrito,
  removeFromCart
} from "../controllers/CarritoController.js";

const router = express.Router();

router.get("/:id_usuario", getCarritoByUser);
router.post("/", addToCart);
router.put("/:id_carrito", updateCarrito);
router.delete("/:id_carrito", removeFromCart);

export default router;
