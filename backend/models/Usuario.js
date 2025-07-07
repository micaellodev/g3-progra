import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Usuario = sequelize.define("Usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  pais: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  clinica: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  freezeTableName: true,
  tableName: 'Usuario',
  timestamps: false
});
