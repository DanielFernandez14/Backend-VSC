import {connect} from "mongoose"
// Removed incorrect import to avoid circular dependency


process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongodb = async () => {
    try {
        await connect(URI_DB)
        console.log("Conectado a MongoDB")
    } catch (error) {
        console.log("No se pudo conectar a MongoDB")
    }
}
