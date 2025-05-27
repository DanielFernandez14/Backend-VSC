import { Request, Response } from "express"
import { User } from "../model/userModel"

const getAllUsers = async (request: Request, response: Response): Promise<any> => {
    try {
    const users = await User.find()
    response.json({ success: true, data: users, message: "Usuarios obtenidos" })
    } catch (error) {
    response.status(500).json({ success: false, message: (error as Error).message })
    }
}

const getUserById = async (request: Request, response: Response): Promise<any> => {
    try {
    const user = await User.findById(request.params.id)
    if (!user) {
        return response.status(404).json({ success: false, message: "Usuario no encontrado" })
    }
    response.json({ success: true, data: user, message: "Usuario obtenido" })
    } catch (error) {
    response.status(500).json({ success: false, message: (error as Error).message })
    }
}

const createUser = async (request: Request, response: Response): Promise<any> => {
    try {
    const newUser = new User(request.body)
    const savedUser = await newUser.save()
    response.status(201).json({ success: true, data: savedUser, message: "Usuario creado" })
    } catch (error) {
    response.status(400).json({ success: false, message: (error as Error).message })
    }
}

const updateUser = async (request: Request, response: Response): Promise<any> => {
    try {
    const updatedUser = await User.findByIdAndUpdate(request.params.id, request.body, { new: true })
    if (!updatedUser) {
        return response.status(404).json({ success: false, message: "Usuario no encontrado" })
    }
    response.json({ success: true, data: updatedUser, message: "Usuario actualizado" })
    } catch (error) {
    response.status(400).json({ success: false, message: (error as Error).message })
    }
}

const deleteUser = async (request: Request, response: Response): Promise<any> => {
    try {
    const deletedUser = await User.findByIdAndDelete(request.params.id)
    if (!deletedUser) {
        return response.status(404).json({ success: false, message: "Usuario no encontrado" })
    }
    response.json({ success: true, data: deletedUser, message: "Usuario eliminado" })
    } catch (error) {
    response.status(500).json({ success: false, message: (error as Error).message })
    }
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser }
