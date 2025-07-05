import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const DetalleCategoria = sequelize.define("DetalleCategoria", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  freezeTableName: true
});