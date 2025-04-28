import os from 'os';
import fileSystem from 'fs';
import * as crypto from 'crypto';

const sumar = (n1: number, n2: number): number => {
    let resultado: number = n1 + n2;
    return resultado;

}


const suma = sumar(5, 10);
console.log(suma);  


console.log(os.platform(), "<-- Sistema Operativo"); 





const data = fileSystem.readFileSync("./colores.json", "utf-8");

// [ por ahora tenemos esto en el archivo colores.json
//     "rojo",
//     "verde",
//     "azul",
//     "amarillo",
//     "naranja",
//     "morado",
//     "rosa"
// ]

const parsedData = JSON.parse(data);

parsedData.push("blanco", "rojiñoMalvado"); // Agregamos un nuevo color al array de forma temporal, a nivel de memoria ram

console.log(parsedData, "<-- Datos JSON");

fileSystem.writeFileSync("./colores.json", JSON.stringify(parsedData)); // Guardamos el nuevo color en el archivo colores.json

const id = crypto.randomUUID();
console.log(id, "");
