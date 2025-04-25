// //🧹 Ejercicio 2: Limpieza de datos inválidos
// Crear una interfaz Task con:
// id: string
// title: string
// completed: boolean
// Crear un array de tareas, algunas válidas y otras con campos extra o con tipos incorrectos.
// Escribir una función cleanTasks que filtre y retorne solo las tareas que cumplen con la interfaz.


import crypto from "node:crypto";

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const task1: Task = {
  id: crypto.randomUUID(),
  title: "ir al supermercado",
  completed: true,
};

const task2: Task = {
  id: crypto.randomUUID(),
  title: "cocinar",
  completed: false,
};

const task3: Task = {
  id: crypto.randomUUID(),
  title: "estudiar",
  completed: true,
};

const mes = {
  id: crypto.randomUUID(),
  title: "diciembre",
};

const producto = {
    id: crypto.randomUUID(),
    title: "mesa",
    colors: ["white", "black"],
};

const tasks = [task1, task2, task3, mes, producto];

const filtredTasks: [] = []; 

const cleanTasks = () => {

    const filteredTasks = tasks.filter((task) => {
    console.log(typeof task.id === "string" && typeof task.title === "string" && typeof task.completed === "boolean")
    return typeof task.id === "string" && typeof task.title === "string" && typeof task.completed === "boolean"
    
    
})
    return filteredTasks

};


console.log(cleanTasks());