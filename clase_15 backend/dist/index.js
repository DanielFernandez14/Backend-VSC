"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const mongo_1 = require("./config/mongo");
process.loadEnvFile();
const cors_1 = __importDefault(require("cors"));
//1234
const PORT = process.env.PORT;
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    year: { type: Number, required: true }
});
const Book = (0, mongoose_1.model)("Book", bookSchema);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        return {
            success: true,
            data: books,
            message: "obteniendo los libros"
        };
    }
    catch (error) {
        const err = error;
        return {
            success: false,
            message: err.message
        };
    }
});
// Obtener todos los libros
// https://localhost:1234/api/books
// request -> requerido
// response -> respuesta
app.get("/db-api-utn/books", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield Book.find();
        return response.json({
            success: true,
            data: books,
            message: "obteniendo los libros"
        });
    }
    catch (error) {
        const err = error;
        return response.json({
            success: false,
            message: err.message
        });
    }
}));
// Obtener un personaje
// https://rickandmortyapi.com/api/character/43
// Metodo HTTP -> get post patch delete
// POST - https://localhost:1234/api/books
app.post("/db-api-utn/books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const { title, author, year } = body;
        if (!title || !author || !year)
            return res.status(400).json({ success: false, message: "data invalid" });
        const newBook = new Book({ title, author, year });
        const saveBook = yield newBook.save();
        res.status(201).json({ success: true, saveBook, message: "libro agregado con exito" });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}));
app.delete("/db-api-utn/books/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedBook = yield Book.findByIdAndDelete(id);
        if (!deletedBook)
            return res.status(404).json({
                success: false,
                message: "Error al borrar el libro"
            });
        res.json({ success: deletedBook, message: "Libro borrado con éxito" });
    }
    catch (error) {
        const err = error;
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
}));
app.patch("/db-api-utn/books/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, year } = req.body;
        const updated = yield Book.findByIdAndUpdate(req.params.id, { title, author, year }, { new: true });
        if (!updated)
            return res.status(404).json({ success: false, message: "Libro no encontrado" });
        return res.json({ success: true, data: updated, message: "Libro actualizado" });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
}));
app.listen(PORT, () => {
    console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`);
    (0, mongo_1.connectMongoDB)();
});
