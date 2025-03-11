import app from './app.js'
import { sequelize } from './database/database.js'



async function main() {
    try {
        
        //subir tablas
        await sequelize.sync({ force: false})

        //valida funcionamiento de la conexion 
        await sequelize.authenticate();
        console.log('la conexion es correcta')

        app.listen(3000);
        console.log("servidor en el puerto", 3000)
    } catch (error) {
        console.error('Error en la conexion a la base de datos.', error);
    }
}

main();