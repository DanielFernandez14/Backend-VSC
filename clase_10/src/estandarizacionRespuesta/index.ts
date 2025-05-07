const users = [
    {
      _id: 'a1b2c3d4-e5f6-7890-ab12-cdef34567890',
      name: 'Laura Martínez',
      email: 'laura.martinez@example.com',
      password: 'hashed_password_123',
      age: 28,
      gender: 'female',
      phone: '+54 911 2345 6789',
      address: {
        street: 'Av. Siempre Viva 123',
        city: 'Buenos Aires',
        state: 'CABA',
        zip: '1425',
        country: 'Argentina'
      },
      isActive: true,
      role: 'user',
      createdAt: '2024-10-01T10:15:00Z',
      updatedAt: '2025-01-15T12:00:00Z'
    },
    {
      _id: 'b2c3d4e5-f6a7-8901-bc23-def456789012',
      name: 'Carlos Gómez',
      email: 'carlos.gomez@example.com',
      password: 'hashed_password_456',
      age: 35,
      gender: 'male',
      phone: '+54 911 9876 5432',
      address: {
        street: 'Calle Falsa 456',
        city: 'Córdoba',
        state: 'Córdoba',
        zip: '5000',
        country: 'Argentina'
      },
      isActive: false,
      role: 'admin',
      createdAt: '2023-12-20T08:30:00Z',
      updatedAt: '2024-06-05T09:45:00Z'
    },
    {
      _id: 'c3d4e5f6-a7b8-9012-cd34-ef5678901234',
      name: 'Sofía Ruiz',
      email: 'sofia.ruiz@example.com',
      password: 'hashed_password_789',
      age: 41,
      gender: 'non-binary',
      phone: '+54 911 1122 3344',
      address: {
        street: 'Ruta 9 km 123',
        city: 'Rosario',
        state: 'Santa Fe',
        zip: '2000',
        country: 'Argentina'
      },
      isActive: true,
      role: 'editor',
      createdAt: '2024-05-10T14:20:00Z',
      updatedAt: '2025-04-01T11:10:00Z'
    }
];

interface User {
    _id: string,
    name: string,
    password: string,
    email: string,
    gender: string,
    age: number,
    phone: string,
    address: any,
    isActive: boolean,
    role: string,
    createdAt: string,
    updatedAt: string,
}

interface Res {
    success: boolean,
    message: string,
    data?: any
}

const getUserById = (id: string): Res => {
    if (!id) {
        const response = {
            success: false,
            data: null,
            message: "ID is required"
        }
        return response
    }
    if (typeof id !== 'string') {
        const response = {
            success: false,
            data: null,
            message: "ID must be a string"
        }
        return response
    }
    if (id.length !== 36) {
        const response = {
            success: false,
            data: null,
            message: "ID must be 36 characters long"
        }
        return response
    }
    if (id.split("-").length !== 5) {
        return {
            success: false,
            data: null,
            message: "Invalid ID format"
        }
    }
    

// LECTURA EN LA BASE DE DATOS
    // Simulando una búsqueda en la base de datos
    const user = users.find(user => user._id === id)
    if (!user) {
        const response = {
            success: false,
            data: null,
            message: "User not found"
        }
        return response
    }
// RETORNANDO EL CASO DE EXITO
    // Simulando una respuesta exitosa
    const response = {
        success: true,
        data: user,
        message: "Found user by ID"
    }
    return response 
}

const foundUser = getUserById('c3d4e5f6-a7b8-9012-cd34-ef5678901234')
console.log(foundUser)


const createUser = (user: User) => {
    console.log("Agregando usuario a la base de datos")}

createUser  ({
        _id: 'c3d4e5f6-a7b8-9012-cd34-ef5678901234',
        name: 'Sofía Ruiz',
        email: 'sofia.ruiz@example.com',
        password: 'hashed_password_789',
        age: 41,
        gender: 'non-binary',
        phone: '+54 911 1122 3344',
        address: {
        street: 'Ruta 9 km 123',
        city: 'Rosario',
        state: 'Santa Fe',
        zip: '2000',
        country: 'Argentina'
        },
        isActive: true,
        role: 'editor',
        createdAt: '2024-05-10T14:20:00Z',
        updatedAt: '2025-04-01T11:10:00Z'
    })
    