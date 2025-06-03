import express from "express"
import { connect, model, Schema } from "mongoose"

process.loadEnvFile()

const PORT = process.env.PORT || 3000
const URI_DB = process.env.URI_DB || ""

const app = express()

const connectDb = async () => {
    try {
    await connect(URI_DB)
    console.log("✅ Conectado a Mongo DB")
    } catch (error) {
    console.log("❌ Error al conectarse a Mongo DB")
    }
}


app.get("/api/products", async (req, res): Promise<any> => {
    try {
    // const products = await
    } catch (error) {
    const err = error as Error
    res.status(500).json({
        success: false,
        message: err.message
    })  
    }
})

app.use(express.json())

app.listen(PORT, async () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
    await connectDb()
})