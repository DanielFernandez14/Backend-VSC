import { Router } from "express";
import { Book } from "../models/bookModels";
import { getAllBooks, createBook, deleteBook, updateBook } from "../controllers/bookController";

const bookRouter = Router()

// Obtener todos los libros
// https://localhost:1234/api/books
// request -> requerido
// response -> respuesta


bookRouter.get("/", getAllBooks)

// Metodo HTTP -> get post patch delete

// POST - https://localhost:1234/api/books
bookRouter.post("/", createBook)

bookRouter.delete("/:id", deleteBook)

bookRouter.patch("/:id", updateBook)


export {bookRouter}