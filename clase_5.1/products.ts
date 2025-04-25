import * as crypto from 'node:crypto';


interface Product {
    // Definimos la interfaz de producto
    id: string;
    name: string;
    price: number;
    stock: boolean;
}


const id = crypto.randomUUID(); // Generamos un id aleatorio
console.log(id); // Imprimimos el id en consola


const createProduct = (id: string, name: string, price: number, stock: boolean) => {
    return {
        id: id, 
        name: name,
        price: price,
        stock: stock
}
} // Creamos una funcion que recibe los parametros y devuelve un objeto con esos parametros

const product1: Product = createProduct(id, 'pc', 1000, true); // Creamos un producto con el id generado, nombre y stock
const mobile = createProduct(crypto.randomUUID(), 'mobile', 500, true); // Creamos un producto con el id generado, nombre y stock
const tablet = createProduct(crypto.randomUUID(), 'tablet', 300, true); // Creamos un producto con el id generado, nombre y stock



const product4 = {
    id: crypto.randomUUID(), // Generamos un id aleatorio
    name: 'mouse', // Nombre del producto
    price: 300, // Precio del producto
    stock: true, // Stock del producto
    colors: ['red', 'blue', 'green'], // Colores del producto
}
// aparece igual porque no lo pusimos en la interfaz, pero es un objeto de tipo Product


const products: Product[] = [product1, mobile, tablet, product4]; // Creamos un array de productos con los productos creados anteriormente

console.log(products); // Imprimimos el producto en consola

const foundProduct = products.find((product) => product.name === 'pc'); // Buscamos el producto con el nombre 'pc' en el array de productos
console.log(`La ${foundProduct?.name} tiene un costo de $${foundProduct?.price}`); // Imprimimos el producto encontrado en consola