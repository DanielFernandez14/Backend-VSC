import mongoose from 'mongoose';

//funcion encargda de conectar a la base de datos
const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/utn-backend 30-4'
    );
    console.log('Conectado a la base de datos');
}

export { connectDB };


