// recibir el input
// procesar el input
// buscar la data en caso de que sea apto y tenga el permiso
// devolverle la data al usuario

// pedirle al usuario que indique que si quiere la lista de usuarios debe indicarlo mediante el comando "getUsers"
// validar credencial

import { usuarios } from "./usuarios.js"

const argumentos = process.argv.slice(2)

if (argumentos[0] === "getUsers") {
  console.log(usuarios)
} else if (argumentos[0] === "getUser") {
  const usuario = usuarios.find((u) => u.id === Number(argumentos[1]))
  if (usuario === undefined) {
    console.log("Usuario no encontrado...")
  } else {
    console.log(usuario)
  }
} else if (argumentos[0] === "createUser") {
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre: argumentos[1],
    email: argumentos[2],
    rol: argumentos[3]
  }
  usuarios.push(nuevoUsuario)
  usuarios.forEach(u => {
    // console.log(`${u.id} - ${u.nombre} - ${u.email} - ${u.rol}`)
    console.log(usuarios)
  })
  } else if (argumentos[0] === "updateUser") {
    const id = Number(argumentos[1])
    const usuarioEncontrado = usuarios.find((usuarios) => usuarios.id === id) 
    console.log(usuarioEncontrado, "<- usuario original")
  
    if(usuarioEncontrado === undefined) {
      console.log("Usuario no encontrado para modificar...")
    } else {
      const nombre =  argumentos[2]
      const email = argumentos[3]
      const rol = argumentos[4]


// como le voy a enviar un nombre, mail o rol disinto a un guion, entonces lo voy a modificar 
    if (nombre !== "-") {
      usuarioEncontrado.nombre = nombre
    }

    if (email !== "-") {
      usuarioEncontrado.email = email
    }

    if (rol !== "-") {
      usuarioEncontrado.rol = rol
    }

    console.log(usuarioEncontrado, "<- usuario actualizado")
    console.log(usuarios, "<- lista de usuarios actualizada")
}
    
  } else if (argumentos[0] === "deleteUser"){
    const id = argumentos[1] 
    if (id === undefined) {
      console.log("Debes ingresar el Id del usuario que deseas borrar...")
    }



//filter 
// findIndex - splice
let usuarioBorrado = null

    const usuariosFiltrados = usuarios.filter(usuario => {
      if (usuario.id !== Number(id)) {
        return usuario
      } else {
        usuarioBorrado = usuario
        // console.log(usuarioBorrado, "<- Usuario borrado...")
        // console.log(usuariosFiltrados, "<- Lista de usuarios filtrados...")
        // console.log("Usuario borrado correctamente...")
      }
    })

    if (usuarios.length === usuariosFiltrados.length && id !== undefined) {
      console.log("Usuario no encontrado...")
    } 
    if (usuarioBorrado) {
      console.log(usuariosFiltrados)
    }
    

  } else { console.log("401 Unauthorized")
}