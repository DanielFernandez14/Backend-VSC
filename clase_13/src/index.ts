import  express  from "express";
import { connectMongodb } from "./config/mongo"
process.loadEnvFile()
import { Schema } from "mongoose";
import { Request, Response } from "express";
import cors from "cors"


interface Book {
  title: string;
  author: string;
  year: number;
}

//1234
const PORT = process.env.PORT

const bookSchema = newSchema ({
    title: {type: String, required: true, unique: true},
    author: {type: String, required: true},
    year: {type: Number, required: true}
})

const Book = model ("Book", bookSchema)

const getAllBooks = async () => {
  try {
    const books = await Book.find();
    return {
      success: true,
      data: books,
      message: "Obteniendo todos los libros"
    };
  } catch (error) {
    const err = error as Error;
    return {
      success: false,
      message: err.message
    };
  }
};



// obtener todos los libros
// http://localhost:1235/api/books
// request -> requerido
// response -> respuesta

app.get("/api/books", async (request: response): Promise<any> => {
  try {
    const books = await Book.find();
    return response.json({
      success: true,
      data: books,
      message: "Obteniendo todos los libros"
    });
  } catch (error) {
    const err = error as Error;
    return response.json({
      success: false,
      message: err.message
    });
  }
});


const app = express()

app.listen(PORT, () => {
    console.log(`Servidor en escucha en el puerto http://localhost:${PORT}`)
})