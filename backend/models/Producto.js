import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Categoria } from "./Categoria.js";

export const Producto = sequelize.define("Producto", {
  id_producto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING(100),
  presentacion: DataTypes.STRING(100),
  descripcion: DataTypes.TEXT,
  stock: DataTypes.INTEGER,
  precio: DataTypes.DECIMAL(10, 2),
  imagen: DataTypes.TEXT
}, {
  freezeTableName: true
});

// Relaciones
Producto.belongsTo(Categoria, { foreignKey: "id_categoria" });
Categoria.hasMany(Producto, { foreignKey: "id_categoria" });
