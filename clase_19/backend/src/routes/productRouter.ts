import { Router } from 'express';
import { Product } from '../models/productModel';
import { addNewProduct, getAllProducts, deleteProduct, updateProduct } from '../controllers/productController';

const productRouter = Router();

//manejar las peticiones GET y POST para productos
productRouter .get("/", getAllProducts)
productRouter.post("/", addNewProduct)
productRouter.patch("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);




export {productRouter};