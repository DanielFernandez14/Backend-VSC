// para utilizar los modulos de otros archivos se indica el nombre y la ruta preveniente.
import { showPassword, credential } from "./variables.js"
import { sumar, sumar2 } from "./arrow-function.js"


// console.log ("Hola por primera vez desde backend")

const nombre = "Daniel"
const edad = "25"

console.log(`Mi nombre es ${nombre} y tengo ${edad} años`)

//npm init -> crea un proyecto de node, tambien un package.json. seria como el "DNI" de un proyecto de node

const password = showPassword("pepe123")
console.log(password)
console.log(credential)



const resultado = sumar(10, 20)
console.log(resultado)

const resultado2 = sumar2 (50, 200)
console.log(resultado2)








