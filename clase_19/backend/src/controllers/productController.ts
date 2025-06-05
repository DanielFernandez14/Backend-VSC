import { Request, Response } from 'express';
import { Product } from '../models/productModel';
import { productRouter } from '../routes/productRouter';

const getAllProducts = async (req: Request, res: Response): Promise<any> => {
    try {
        const products = await Product.find()
        res.json({
            status: "success",
            message: "Obteniendo los productos",
            data: products,
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

const addNewProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, price, category } = req.body;

        // Validaciones manuales
        if (!name || !category) {
            return res.status(400).json({
                success: false,
                message: "Los campos 'name' y 'category' son obligatorios"
            });
        }

        const allowedCategories = ["almacen", "limpieza"];
        const categoryNormalized = category.toLowerCase().trim();

        if (!allowedCategories.includes(categoryNormalized)) {
            return res.status(400).json({
                success: false,
                message: `Categoría '${category}' no válida. Debe ser 'almacen' o 'limpieza'`
            });
        }

        const newProduct = new Product({
            name: name.trim(),
            price: Number(price) || 0, // default si viene vacío
            category: categoryNormalized
        });

        await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Producto creado exitosamente",
            data: newProduct,
        });

    } catch (error) {
        const err = error as Error;
        res.status(500).json({
            success: false,
            message: err.message || "Error al crear el producto"
        });
        console.error('❌ Error al crear producto:', error);
    }
};


const updateProduct = async (req: Request, res: Response): Promise<any> => {
    try {
    const { id } = req.params;
    const { name, price, category } = req.body;

    // Validaciones básicas
    if (!name || !category) {
        return res.status(400).json({
        success: false,
        message: "Los campos 'name' y 'category' son obligatorios"
        });
    }

    const allowedCategories = ["almacen", "limpieza"];
    const categoryNormalized = category.toLowerCase().trim();

    if (!allowedCategories.includes(categoryNormalized)) {
        return res.status(400).json({
        success: false,
        message: `Categoría '${category}' no válida. Debe ser 'almacen' o 'limpieza'`
        });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        id,
        {
        name: name.trim(),
        price: Number(price) || 0,
        category: categoryNormalized,
        },
        { new: true, runValidators: true }
    );

    if (!updatedProduct) {
        return res.status(404).json({
        success: false,
        message: `Producto con id '${id}' no encontrado`
        });
    }

    res.status(200).json({
        success: true,
        message: "Producto actualizado exitosamente",
        data: updatedProduct,
    });

    } catch (error) {
    const err = error as Error;
    res.status(500).json({
        success: false,
        message: err.message || "Error al actualizar el producto"
    });
    console.error('❌ Error al actualizar producto:', error);
    }
};


export { getAllProducts, addNewProduct, updateProduct,  }