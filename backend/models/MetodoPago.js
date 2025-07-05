import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const MetodoPago = sequelize.define("MetodoPago", {
  id_metodo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_metodo: DataTypes.STRING(100)
}, {
  freezeTableName: true
});
