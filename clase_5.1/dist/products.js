"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const crypto = __importStar(require("node:crypto"));
const id = crypto.randomUUID(); // Generamos un id aleatorio
console.log(id); // Imprimimos el id en consola
const createProduct = (id, name, price, stock) => {
    return {
        id: id,
        name: name,
        price: price,
        stock: stock
    };
}; // Creamos una funcion que recibe los parametros y devuelve un objeto con esos parametros
const product1 = createProduct(id, 'pc', 1000, true); // Creamos un producto con el id generado, nombre y stock
const mobile = createProduct(crypto.randomUUID(), 'mobile', 500, true); // Creamos un producto con el id generado, nombre y stock
const tablet = createProduct(crypto.randomUUID(), 'tablet', 300, true); // Creamos un producto con el id generado, nombre y stock
const product4 = {
    id: crypto.randomUUID(), // Generamos un id aleatorio
    name: 'mouse', // Nombre del producto
    price: 300, // Precio del producto
    stock: true, // Stock del producto
    colors: ['red', 'blue', 'green'], // Colores del producto
};
// aparece igual porque no lo pusimos en la interfaz, pero es un objeto de tipo Product
const products = [product1, mobile, tablet, product4]; // Creamos un array de productos con los productos creados anteriormente
console.log(products); // Imprimimos el producto en consola
const foundProduct = products.find((product) => product.name === 'pc'); // Buscamos el producto con el nombre 'pc' en el array de productos
console.log(`La ${foundProduct === null || foundProduct === void 0 ? void 0 : foundProduct.name} tiene un costo de $${foundProduct === null || foundProduct === void 0 ? void 0 : foundProduct.price}`); // Imprimimos el producto encontrado en consola
