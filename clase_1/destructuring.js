// un objeto es una estructura de datos que contiene propiedades y metodos
// el destructuring me permite es extraer del objeto, las propiedades que tiene.


const persona = {
    nombre: "Paula",
    tienePerros: true,
    nombreDeMascota: "Dene",
    saludar() {
        return `Hola! Soy ${this.nombre} y mi mascota se llama ${this.nombreDeMascota}`
    } 
}   
    // se usa el this para que sepa que estamos llamandolo dentro del objeto y no por fuera. por ejemplo si hubiera un let name = pepe por afuera del objeto y llamamos sin el this, nos mostraria pepe


console.log(persona.nombre)

// console.log(persona.nombre) // nombre de la persona
// console.log(persona.tienePerros) // saber si tiene perros
// console.log(persona.nombreDeMascota) // nombre del perro de la persona
// console.log(persona.saludar()) // el saludo de la persona

const { nombre, tienePerros, nombreDeMascota, saludar } = persona

console.log(nombre)
console.log(tienePerros)
console.log(nombreDeMascota)
console.log(persona.saludar())

const mascota = {
    nombreMascota: "Dene",
    colores: ["negro", "gris"],
    raza: "Border Collie"
}
const { nombreMascota, colores, raza} = mascota


console.log(nombreMascota, "<- nombre de la mascota")
console.log(colores, "<- colores de la mascota")
console.log(raza, "<- raza de la mascota")
