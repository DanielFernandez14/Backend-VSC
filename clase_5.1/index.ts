interface User {
    id: number;
    nombre: string;
    lastName: string;
    course: string;
    age? : number; // ? significa que es opcional
    rol?: "admin" | "cliente"; // ? significa que es opcional
}

const user1 : User = {
    id: 1,
    nombre: 'Daniel',
    lastName: 'Fernandez',
    course: 'typescript',
    age: 25,
    rol: "admin" // el rol es obligatorio
}


const{ id, nombre, lastName, course, age } = user1

console.log(`hola soy ${user1.nombre} ${user1.lastName} y tengo ${user1.age} años`) // hola soy Daniel Fernandez y tengo 25 años -- npm run dev para ejecutar el programa


const crearUsuario = (id: number, nombre2: string, lastName: string, courseUser2: string, ageUser2: number, rol: User["rol"]) : User => {
    // usamos los parametros para crear un nuevo usuario
    const newUser = {
        id: id,
        nombre: nombre2,
        lastName: lastName,
        course: courseUser2,
        age: ageUser2,
        rol: rolUser2 // el rol es opcional, pero si lo pasamos, lo pasamos como un string literal
    }
    return newUser
}

const idUser2 = 2 
const nombre2 = 'josefo'
const lastNameUser2 = 'Fernadez'
const course2 = 'javascript'
const ageUser2 = 24
const rolUser2: User["rol"] = "cliente" // el rol es opcional, pero si lo pasamos, lo pasamos como un string literal

//los argumentos son los datos pasados a la funcion

const usuario2 = crearUsuario(idUser2, nombre2, lastNameUser2, course2, ageUser2, rolUser2)
console.log(usuario2)