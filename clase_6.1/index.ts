import crypto from 'crypto';

interface Task {
    id: string;
    title: string;
    completed: boolean;
}

const task1: Task = {
    id: crypto.randomUUID(),
    title: 'Task 1',
    completed: false,
};

const task2: Task = {
    id: crypto.randomUUID(),
    title: 'Task 2',
    completed: false,
};

const task3: Task = {
    id: crypto.randomUUID(),
    title: 'Task 3',
    completed: true,
};

const mes = {
    id: crypto.randomUUID(),
    title: 'Diciembre',
}; 

const producto = {
    id: crypto.randomUUID(),
    title: 'Producto',
    colors: ['red', 'blue', 'green'],
};

const tasks = [task1, task2, task3, mes, producto];



const cleanTasks = () => {
const filteredTask = tasks.filter((task) => {
    const isValid = typeof task.id === 'string' && typeof task.title === 'string';

    if(isValid) {
        return true
    } else {
        return false
    }
});

return filteredTask;

}

const resultFilter = cleanTasks();

console.log(resultFilter);