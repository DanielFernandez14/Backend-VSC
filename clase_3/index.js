// const usuarios = require("./index.js")

import {usuarios} from "./usuarios.js"

const argumentos = process.argv.slice(2)

console.log(argumentos)

if (argumentos[0] === "getUsers") {
  console.log(usuarios)
} else if (argumentos[0] === "getUser") {
  const usuario = usuarios.find()
} else if (argumentos[0] === "createUser") {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: argumentos[1],
    email: argumentos[2],
    rol: argumentos[3]
  }
  usuarios.push(nuevoUsuario)
} else {
  console.log("401 Unauthorized")
}
