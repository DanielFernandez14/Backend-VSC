// funcion nombrada

function sumar(n1,n2) {
    return n1 + n2
}

//arrow function -> LA SINTAXIS de la arrow function indica que si el scope tiene solo una linea se puede obviar el return y las llaves
//const sumar2 = (n1, n2) => n1 + n2 -> se puede hacer asi tambien
const sumar2 = (n1, n2) => {
    return n1 + n2
}


export { sumar, sumar2 }
