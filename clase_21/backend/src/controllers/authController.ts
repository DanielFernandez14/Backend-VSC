import { Request, Response } from "express"
import bcryptjs from "bcryptjs"
import { Auth } from "../models/authModel"

interface User {
    username: string
    email: string
    password: string
}

const register = async (req: Request, res: Response): Promise<any> => {
    try {
        const body = req.body
        const {username, email, password}: User = body

        //hashear la contraseña
        const hash = await bcryptjs.hash(password, 10)

        const newDataUser = {
            username,
            email,
            password: hash
        }

        const newUser = new Auth(newDataUser)
        await newUser.save()
        res.status(201).json({
            success: true,
            messages: "Usuario creado con éxito", 
            data: {_id: newUser._id, username: newDataUser.username, email: newDataUser.email}
        })

    } catch (error) {
        const err = error as Error
        return res.status(500).json({
            success: false,
            message: err.message
    })
    }
}

const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const body = req.body
        const { email, password }: Partial<User> = req.body

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Data invalida"
            })
        }

        const validateEmail= await Auth.findOne({
            email
        })
        if (!validateEmail) {
            return res.status(404).json({
                success: false,
                message: "No autorizado, email no encontrado"
            })
        }

        const validatePassword = await bcryptjs.compare(password, validateEmail.password)
        
        if (!validatePassword) {
            return res.status(401).json({
                success: false,
                message: "No autorizado, contraseña incorrecta"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Usuario logueado con éxito"
        })


    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
    })
    }
}

export { register, login }