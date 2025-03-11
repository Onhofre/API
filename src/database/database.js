import { Sequelize } from "sequelize";


export const sequelize = new Sequelize(
    //NOMBRE DE LA BASE DE DATOS
    'projectsdb', 
    //NOMBRE DE USUARIO
    'postgres',
    //CONTRASEÑA
    '123456789', 
    {
    host: 'localhost',
    dialect: 'postgres'
}) 