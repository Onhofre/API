import express from "express";
import routerapi from './routes/routers.js'
import productos_routes from './routes/productos_routes.js'

const app= express ();

//middleware
app.use(express.json());

app.use(routerapi)
app.use(productos_routes)

export default app;
