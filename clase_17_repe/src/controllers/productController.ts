import { Request, Response } from 'express';
import { Product } from '../models/productModel';
import { productRouter } from '../routes/productRouter';

const getAllProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        const products = await Product.find()
        res.json({
            status: "success",
            data: products,
            message: "Obteniendo los productos"
        })
    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            success: false,
            message: err.message || "Error al obtener los productos"
        });
        console.error('❌ Error al obtener productos:', error);
    }
}



export { getAllProducts }