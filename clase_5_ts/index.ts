// una interfaz es una forma de definir la estructura de un objeto y funciona como molde. es como un contrato para conectar un objeto a una interfaz y que cumpla con la estructura definida en la interfaz. 

interface User {
    id: number;
    firstName: string;
    lastName: string;
    course: string;
    rol?: "estudiante" | "profesor" 
}


const user1 : User = {
    id: 1,
    firstName: 'Maria',
    lastName: 'Caseres',
    course: "backend Web",
    rol: "profesor"

}

const { id, firstName, lastName, course } = user1
console.log(`Hola soy ${firstName} ${lastName} y estoy en el curso de ${course}`);    

const crearUsuario = (id: number, firstName: string, lastName: string, Course: string, rol: string): User => {
        // usar los parametros para crear el usuario
    const newUser = {
        id,
        firstName,
        lastName,
        course,
    }
    return newUser
}

const idUser2 = 2
const firstName2 = "Pablo"
const lastName2 = "Gonzalez"
const course2 = "Front-end Web"
const rol2 = "tutor"


// los argumentos son los datos pasados a la funcion
const usuario2 = crearUsuario(idUser2, firstName2, lastName2, course2, rol2)
console.log(usuario2); 