import { connect } from "mongoose";


process.loadEnvFile()
const URI_DB = process.env.URI_DB || ''

const connectDb = async () => {
    try {
        await connect(URI_DB);
        console.log('✅ Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('❌ Error al conectar a MongoDB:', error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
} 
export { connectDb };