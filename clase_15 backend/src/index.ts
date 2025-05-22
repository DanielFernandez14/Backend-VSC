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
app.use(express.json())
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

// POST - https://localhost:1234/api/books
app.post("/db-api-utn/books", async (req, res): Promise<any> => {
    try {
        const body = req.body
        const {title, author, year} = body 
        if (!title || !author || !year) return res.status(400).json ({success: false, message: "data invalid"})

        const newBook = new Book ({title, author,year})
        const saveBook = await newBook.save()
        res.status(201).json({success: true,  saveBook, message: "libro agregado con exito"})    
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

app.delete("/db-api-utn/books/:id", async (req, res): Promise<any> => {
    try {
        const id = req.params.id
        const deletedBook = await Book.findByIdAndDelete(id)
        if(!deletedBook) return res.status(404).json({
            success: false,
            message: "Error al borrar el libro"}) 
            res.json({success: deletedBook, message: "Libro borrado con éxito"})
    } catch (error) {
        const err = error as Error
        res.status(500).json({
            success: false,
            message: err.message
        })
        
    }
})

app.patch("/db-api-utn/books/:id", async (req, res): Promise<any> => {
    try {
    const { title, author, year } = req.body
    const updated = await Book.findByIdAndUpdate(
        req.params.id,
        { title, author, year },
        { new: true }
    )
    if (!updated) return res.status(404).json({ success: false, message: "Libro no encontrado" })
    return res.json({ success: true, data: updated, message: "Libro actualizado" })
    } catch (err) {
    return res.status(500).json({ success: false, message: (err as Error).message })
    }
})


app.listen(PORT, () => {
    console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongoDB()
})