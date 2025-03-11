import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno desde .env

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    ssl: true,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // Necesario para Render
        },
    },
});