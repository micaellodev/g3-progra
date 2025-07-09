import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const DetalleCategoria = sequelize.define("DetalleCategoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});