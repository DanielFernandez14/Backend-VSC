import crypto from "node:crypto";


interface Product {
    id: string;
    name: string;
    price: number;
    stock: boolean;
}

const createProduct = (id: string, name: string, price: number, stock: boolean): Product => {
    return {
        id, 
        name,
        price, 
        stock
}}

const pc = createProduct(crypto.randomUUID(), "PC", 1000, true)
const mobile = createProduct(crypto.randomUUID(), "Mobile", 500, true)
const tablet = createProduct(crypto.randomUUID(), "Tablet", 300, false)

const products = [pc, mobile, tablet]
console.log(products);



























// Universal unique identifier 
// UUID es un identificador único universal que se utiliza para identificar de manera única un objeto o entidad en un sistema. Es una cadena de caracteres que sigue un formato específico y es prácticamente garantizado que sea único en el espacio y el tiempo. Los UUIDs son ampliamente utilizados en bases de datos, sistemas distribuidos y aplicaciones para evitar colisiones de identificadores. Un UUID típico tiene la forma "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", donde cada "x" representa un dígito hexadecimal (0-9, a-f).
// un id tiene que tener las siguientes caracteristicas:
// debe ser unico, no se puede cambiar, no se puede repetir