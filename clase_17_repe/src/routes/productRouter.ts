import { Router } from 'express';
import { Product } from '../models/productModel';
import { getAllProducts } from '../controllers/productController';

const productRouter = Router();

productRouter .get("/", getAllProducts)

export {productRouter};