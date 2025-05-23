import express from "express"  
import { connectMongoDB } from "./config/mongo"
process.loadEnvFile()
import cors from "cors"
import { bookRouter } from "./routes/bookRouter"


//1234
const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.use("/db-api-utn/books", bookRouter)

app.listen(PORT, () => {
    console.log(`✅ Servidor en escucha en el puerto http://localhost:${PORT}`)
    connectMongoDB()
})

///db-api-utn/books/