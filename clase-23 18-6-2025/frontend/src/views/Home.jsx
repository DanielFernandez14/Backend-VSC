import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";

const Home = () => {
    const [products, setProducts] = useState([])


    // realizar la peticion fetch a la API para obtener los productos
    // mostrar en el home la lista de productos


    const fetchProducts = async () => {
        const response = await fetch('http://localhost:1234/api/products')
        const responseToJson = await response.json()
        
        setProducts(responseToJson.data);
    }
    
    useEffect(() => {
        fetchProducts()
    }, []);



    return (
        <Layout>
            <h1>Lista de Productos</h1>
            <p>Bienvenido a nuestra tienda. A continuación encontrarás una selección de productos disponibles para su compra.</p>

            <section>
                {
                products.map(product => (
                    <div>
                        <p><b>Id:</b> {product._id}</p>
                        <p><b>Nombre:</b> {product.name}</p>
                        <p><b>Precio:</b> {product.price}</p>
                        <p><b>Category:</b> {product.category}</p>
                        <div>
                            <button>Actualizar</button>
                            <button>Borrar</button>
                        </div>
                    </div>
                ))
                }
            </section>
        </Layout>
    )
}

export { Home };