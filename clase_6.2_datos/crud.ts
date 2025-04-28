import fileSystem, { write } from 'node:fs';
import crypto from 'node:crypto';
import { get } from 'node:http';

//const readDataBase
const readDataBase = () => {
    const dataInBaffer = fileSystem.readFileSync('./user.json', 'utf-8');

    const users = JSON.parse(dataInBaffer);

    return users;
}

//const writeDataBase
const writeDataBase = (newData: any) => {
    fileSystem.writeFileSync('./user.json', JSON.stringify(newData));
    return "DataBase updated!";
}


//const createUser
const createUser = (name: string, password: string) => {
    const newUser = {
        id: crypto.randomUUID(),
        name,
        password
}

    const users = readDataBase();
    
    //lista de usuarios en su ultima version (con el usuario nuevo)
    users.push(newUser);

    writeDataBase(users);
    console.log("Usuario creado con exito!")
}


//const getUsers
const getUsers = () => {
    return readDataBase();
    
}


//const deleteUser

const deleteUser = (id: string) => {
    const users = readDataBase();
    
    const foundUser = users.find((user: any) => user.id === id);
    if (foundUser === undefined) {
        return "Usuario no encontrado!"
    }
    //si el usuario existe, lo borra de la lista de usuarios

    const newUsers = users.filter((user: any) => user.id !== id);

    writeDataBase(newUsers);
    return "Usuario borrado con exito!"
}







console.log(deleteUser("25c67365-41b6-4f05-bec8-d13d9b82c0b9"));
