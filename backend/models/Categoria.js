import { DataTypes } from "sequelize";
import { sequelize } from '../config/database.js';
export const Categoria = sequelize.define("Categoria", {
  id_categoria: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING(100),
  descripcion: DataTypes.TEXT
}, {
  tableName: 'categoria',     // nombre exacto de tu tabla en la BD
  freezeTableName: true,
  timestamps: false           // si no tienes createdAt/updatedAt
});