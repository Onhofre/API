import { productos } from "../models/Productos.js"



export const getproductos = async (req ,res) => {
    try{
        const product = await productos.findAll();
        res.json(product)
    } catch (error){
        return res.status(500).json({ message: error.mesage })
    }
};

export const createproductos = async (req ,res) => {
try{
    const {nombre, precio, descripcion, id_producto} = req.body
    const newproducto = await productos.create({
        nombre,
        precio,
        id_producto
    })
    res.json(newproducto)
}catch (error){
return res.status(500).json({ mesage: error.message})
}
}

export const getproducto = async (req ,res) => {
    const { id } = req.params;
    try {
      const project = await productos.findOne({
        where: {
          id,
        },
      });
      if (!project) return res.status(404).json({message: 'El usuario no existe'})
    res.json(project);
    }catch (error){
    return res.status(500).json({ mesage: error.message})
    }
}

export const updateproductos = async (req ,res) => {
        try{
            const { id } = req.params;
            const {nombre, precio, descripcion, id_producto} = req.body;
    
            const update = await productos.findByPk(id)
            update.nombre = nombre
            update.precio = precio
            update.id_producto = id_producto
            await update.save()
    
            res.json(update)
        }catch(error){
            return res.status(500).json({message: error.message})
        }
}

export const deleteproductos = async (req ,res) => {
        try{
            const {id} = req.params;
            await productos.destroy({
                where:{
                    id,
                },
            });
            res.sendStatus(204);
        }catch (error){
            return res.status(500).json({message: error.message})
        }
}