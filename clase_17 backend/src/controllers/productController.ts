import { Request, Response } from "express"
import { Product } from "../models/productModel"

const getAllProducts = async (req: Request, res: Response): Promise<any> => {
    try {
    const productos = await Product.find()
    res.status(200).json({
        success: true,
        data: productos,
        message: "obteniendo los productos"
    })
    } catch (error) {
    const err = error as Error
    res.status(500).json({
        success: false,
        message: err.message
    })
    }
}

export { getAllProducts }
