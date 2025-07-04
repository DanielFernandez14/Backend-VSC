import { Router } from 'express';
import { Product } from '../models/productModel';
import { addNewProduct, getAllProducts } from '../controllers/productController';

const productRouter = Router();

//manejar las peticiones GET y POST para productos
productRouter .get("/", getAllProducts)
productRouter.post("/", addNewProduct)


export {productRouter};