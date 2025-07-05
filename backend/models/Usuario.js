import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Usuario = sequelize.define("Usuario", {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING(100),
  correo: {
    type: DataTypes.STRING(100),
    unique: true
  },
  contrasena: DataTypes.STRING(100),
  rol: DataTypes.STRING(50),
  direccion: DataTypes.TEXT,
  telefono: DataTypes.STRING(20),
  estado: DataTypes.STRING(20)
}, {
  freezeTableName: true
});
