import { Router } from "express";
import {getProject,createProject, deleteProject, updateProject, getProjects, getProjectsproductos} from '../controllers/controller.js'

const router = Router()

router.get('/proyecto', getProject)
router.post('/proyecto', createProject)
router.put('/proyecto/:id', updateProject)
router.delete('/proyecto/:id', deleteProject)
router.get('/proyecto/:id', getProjects)

router.get('/proyecto/:id/productos', getProjectsproductos)

export default router