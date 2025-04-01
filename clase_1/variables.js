// una variable es un espacio de memoria que se reserva de nuestra pc.
// para identificar ese espacio reservado, accedemos mediante el nombre de la variable

let password = ": esta es la contraseña"

const showPassword = (pass) => {
    return `Your password is ${pass}`
}

const credential = "La credencial es: GGG"

//convierte la funcion showPassword en un modulo
export { showPassword, credential }

