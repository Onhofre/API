import {usuarios} from '../models/usuarios.js'

//Crear los datos JSON
export const createProject = async (req, res) => {
    const {nombre, apellido, usuario} = req.body
    try{
        const newproject = await usuarios.create({
            nombre,
            apellido,
            usuario,
        })
        console.log(newproject)
        res.json(newproject)
    } catch (error){
        return res.status(500).json({message: error.message})
    }


}

//Obtener los datos
export  const getProject = async (req, res) => {

    try{
        const newbuscar = await usuarios.findAll()
        res.json(newbuscar)
    } catch (error){
        return res.status(500).json({message: error.message}) 
    }
}

//Obtener los datos
export  const getProjects = async (req, res) => {
    const { id } = req.params;
    try {
      const project = await usuarios.findOne({
        where: {
          id,
        },
      });
      if (!project) return res.status(404).json({message: 'El usuario no existe'})
    res.json(project);
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }

//Actualizar datos
export const updateProject = async (req,res) => {
    try{
        const { id } = req.params;
        const {nombre, apellido, usuario} = req.body;

        const update = await usuarios.findByPk(id)
        update.nombre = nombre
        update.apellido = apellido
        update.usuario = usuario
        await update.save()

        res.json(update)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

//Borrar datos
export const deleteProject = async(req,res)=> {
    try{
        const {id} = req.params;
        await usuarios.destroy({
            where:{
                id,
            },
        });
        res.sendStatus(204);
    }catch (error){
        return res.status(500).json({message: error.message})
    }
}


export const getProjectsproductos = async (req, res) => {
    try{
        const { id } = req.params;
    const busqueda = await usuarios.findAll({
        where: {id_producto}
    });
    res.json(busqueda)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}




