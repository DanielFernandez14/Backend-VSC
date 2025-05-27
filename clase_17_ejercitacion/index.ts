import express from "express"
import { config } from "dotenv"
import { connectDb } from "./src/config/connectMongoDB"
import { userRouter } from "./src/router/userRouter"

config()
const PORT = process.env.PORT || 3000
const URI_DB = process.env.URI_DB || ""

const app = express()
app.use(express.json())

// Rutas
app.use("/api/users", userRouter)

// Conexión y servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor HTTP en funcionamiento en el puerto ${PORT}`)
    connectDb()
})
