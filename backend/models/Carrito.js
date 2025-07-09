import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Usuario } from "./Usuario.js";
import { Producto } from "./Producto.js";

export const Carrito = sequelize.define("Carrito", {
  id_carrito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cantidad: DataTypes.INTEGER
}, {
  tableName: "carrito",
  freezeTableName: true,
  timestamps:      false
});

// Relaciones
Carrito.belongsTo(Usuario, { foreignKey: "id_usuario" });
Usuario.hasMany(Carrito, { foreignKey: "id_usuario" });

Carrito.belongsTo(Producto, { foreignKey: "id_producto" });
Producto.hasMany(Carrito, { foreignKey: "id_producto" });
