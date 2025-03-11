import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { toDefaultValue } from 'sequelize/lib/utils'

export const productos = sequelize.define('productos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.FLOAT
    },
},
{
timestamps: true,
},
)