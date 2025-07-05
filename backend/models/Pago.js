import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Orden } from "./Orden.js";
import { MetodoPago } from "./MetodoPago.js";

export const Pago = sequelize.define("Pago", {
  id_pago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fecha_pago: DataTypes.DATEONLY,
  monto: DataTypes.DECIMAL(10, 2)
}, {
  freezeTableName: true
});

// Relaciones
Pago.belongsTo(Orden, { foreignKey: "id_orden" });
Orden.hasMany(Pago, { foreignKey: "id_orden" });

Pago.belongsTo(MetodoPago, { foreignKey: "id_metodo" });
MetodoPago.hasMany(Pago, { foreignKey: "id_metodo" });