import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Usuario } from "./Usuario.js";

export const Orden = sequelize.define("Orden", {
  id_orden: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha: DataTypes.DATEONLY,
  total: DataTypes.DECIMAL(10, 2),
  estado: DataTypes.STRING(50)
}, {
  freezeTableName: true
});

// Relaciones
Orden.belongsTo(Usuario, { foreignKey: "id_usuario" });
Usuario.hasMany(Orden, { foreignKey: "id_usuario" });
