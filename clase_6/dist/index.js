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
  title: 1,
};
const producto = {
  id: 1,
  title: "mesa",
  colors: ["white", "black"],
};
const tasks = [task1, task2, task3, mes, producto];
const cleanTasks = () => {
  const filteredTasks = tasks.filter((task) => {
    const isValid =
      typeof task.id === "string" &&
      typeof task.title === "string"
    if (isValid) {
      return true
    }
  });
  return filteredTasks
}
const resultFilter = cleanTasks()
console.log(resultFilter)