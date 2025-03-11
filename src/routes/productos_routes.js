import { Router } from "express";
import { getproductos, createproductos, deleteproductos, updateproductos, getproducto } from "../controllers/productos_controller.js";

 
const router = Router();

router.get("/productos", getproductos);
router.post("/productos", createproductos);
router.put("/productos/:id", updateproductos );
router.delete("/productos/:id", deleteproductos);
router.get("/productos/:id", getproducto);

export default router;