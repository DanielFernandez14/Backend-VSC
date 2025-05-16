import express from "express"  
import { Schema, model } from "mongoose" 
import { connectMongoDB } from "./config/mongo"
process.loadEnvFile()
import cors from "cors"


//1234
const PORT = process.env.PORT


const bookSchema = new Schema({
    title: {type: String, required: true, unique: true },
    author: {type: String, required: true },
    year: {type: Number, required: true}
})

const Book = model ("Book", bookSchema)

const app = express()
app.use(cors())

const getAllBooks = async () => {
    try {
        const books = await Book.find()
        return{
            success: true,
            data: books,
            message: "obteniendo los libros"
        } 
    } catch (error) {
        const err = error as Error
        return {
            success: false,
            message: err.message
            }
        }
    }


// Obtener todos los libros
// https://localhost:1234/api/books
// request -> requerido
// response -> respuesta
app.get("/db-api-utn/books", async (request, response): Promise<any> => {
    try {
        const books = await Book.find()
        return response.json({
            success: true,
            data: books,
            message: "obteniendo los libros"
        })
    } catch (error) {
        const err = error as any
        return response.json({
            success: false,
            message: err.message
        })
        }
    })

// Obtener un personaje
// https://rickandmortyapi.com/api/character/43

// Metodo HTTP -> get post patch delete

app.listen(PORT, () => {
    console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongoDB()
})