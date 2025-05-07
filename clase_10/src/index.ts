import { Schema, model } from 'mongoose';
import {connectDb} from './config/mongo';
import { create } from 'domain';
connectDb()


interface Book {
    title: string;
    releaseYear: number;
    raiting?: number;
}


// query -> consulta -> peticion -> queryres -> respuesta de peticion 
interface QueryRes {
    success: boolean;
    message: string;
    data ?: Book[] | Book | null;
    error ?: string;
}


const bookSchema = new Schema({
    title: { type: String, required: true, unique: true }, 
    releaseYear: { type: Number, required: true },
    raiting: { type: Number, required: true, default: 0 }, 
}, {
        versionKey: false, // desactivar el __v
    })

const Book = model('Book', bookSchema)

const createSuccessRes = (success: boolean, message: string, data: Book | Book []) => {
    return {
        success: success,
        message: message,
        data: data,
    };
}

const getBooks = async () => {
    try
    {
        const books = await Book.find();
        return createSuccessRes(true, 'get all books', books);
    } catch (error: any) {
        return createSuccessRes(false, 'Error al obtener los libros', error.message);
}}
const getBooksById = async (id: string): Promise<QueryRes> => {
    try {
      // Validar si el ID es válido de forma rápida
    if (!id || typeof id !== 'string') {
        return {
        success: false,
        message: 'ID inválido proporcionado',
        data: null
        };
    }

    const book = await Book.findById(id);

    if (!book) {
        return {
        success: false,
        message: 'Libro no encontrado',
        data: null
        };
    }

    return {
        success: true,
        message: 'Libro encontrado',
        data: book
    };

    } catch (error: any) {
    console.error('Error al buscar el libro por ID:', error);
    return {
        success: false,
        message: 'Error al buscar el libro por ID',
        data: null,
        error: error.message
    };
    }
};




const createBook = async (book: Book): Promise<QueryRes | void> => {
    const newBook = new Book(book);
    const addedBook = await newBook.save(); // guardar el libro en la base de datos
    
    console.log('Creando libro...'); // ✅ solo si el guardado fue exitoso

    try {
    await newBook.save();
      console.log('Libro creado', newBook); // ✅ solo si el guardado fue exitoso
    return {
        success: true,
        message: 'Libro creado exitosamente',
        data: addedBook, // devolver el libro creado
      }; // retornar el libro creado
    } catch (error: any) {
    if (error.message.includes('duplicate key error')) {
        // Si el error es de clave duplicada, significa que ya existe un libro con ese título
        console.error('Ya existe un libro con ese título');
    } else {
        console.error('Error al guardar el libro:', error);
    }
    }
};
const updateBook = async (id: string, dataBook: Partial <Book> ) => {}
const deleteBook = async () => {}




const main = async () => {
    const book = await getBooksById('');
    console.log(book)
}
main()
