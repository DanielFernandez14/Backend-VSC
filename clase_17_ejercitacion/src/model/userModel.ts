import { model, Schema } from "mongoose";

// Esquema de usuario
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "user", "guest"], default: "user" }
}, {
    versionKey: false,
    timestamps: true
})

const User = model("User", userSchema)
export { User };