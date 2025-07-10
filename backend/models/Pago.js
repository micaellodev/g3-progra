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
  fecha_pago: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  monto: DataTypes.DECIMAL(10, 2),
  estado: {
    type: DataTypes.STRING(50),
    defaultValue: 'pendiente'
  }
}, {
  freezeTableName: true
});

// Relaciones
Pago.belongsTo(Orden, { foreignKey: "id_orden" });
Orden.hasMany(Pago, { foreignKey: "id_orden" });

Pago.belongsTo(MetodoPago, { foreignKey: "id_metodo_pago" });
MetodoPago.hasMany(Pago, { foreignKey: "id_metodo_pago" });