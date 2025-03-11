import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import {productos} from './Productos.js'

export const usuarios = sequelize.define('clientes',{
//COLUMNAS
id:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
},

nombre:{
    type: DataTypes.STRING,
},

apellido:{
    type:DataTypes.STRING,
},
usuario:{
    type:DataTypes.STRING,
},
},
{
    timestamps: true
});
//relacion de tablas a un usuario
usuarios.hasMany(productos,{
    foreignKey: 'id_producto',
    sourceKey: 'id'
})
//Relacion de tabla a muchos productos
productos.belongsTo(usuarios,{
    foreignKey: 'id_producto',
    targetId: 'id'
}
)