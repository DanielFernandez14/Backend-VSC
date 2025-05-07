import {connect} from "mongoose";
process.loadEnvFile()


const connectDb = async () => {
    try {
        const URI_DB = process.env.URI_DB || ""
        await connect(URI_DB)
    
        console.log('MongoDB connected')
} catch (error: any) {
        console.log('Error al conectar MongoDB -------------', error.message)    
    }
}
// const connectDb = async () => {

export { connectDb }
// export default connectDb