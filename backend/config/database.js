
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("proyecto_db", "postgres", "hola123", {
    host: "localhost",
    dialect: "postgres"
});
