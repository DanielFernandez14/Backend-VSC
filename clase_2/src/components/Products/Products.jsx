import { useState, useEffect } from "react";

import "./Products.css"


const Products = () => {
    const [products, setProducts] = useState([])

    const fetchingProducts = async () => {
        const response = await fetch ("https://fakestoreapi.com/products")
        const products = await response.json()
        setProducts(products)
    }    


    

    useEffect(() => {
        fetchingProducts();
    }, []);


    return (
        <div className="container">
            <div className="grid">
            <h2>Hola desde Products</h2>
        {
            products.map(products => (
                <div className="card2" key={products.id}>
                    <h2>{products.title}</h2>
                    <img src={products.image} alt="" />
                </div>
            ))
        }
            </div>
            <section className="form-section">
  <h2 className="form-title">Añadir Producto</h2>
  <form className="product-form">
    <input type="text" name="title" placeholder="Ingrese el nombre" className="form-input" />
    <input type="number" name="price" placeholder="Ingrese el precio" className="form-input" />
    <input type="text" name="description" placeholder="Ingrese la descripción" className="form-input" />
    <input type="text" name="category" placeholder="Ingrese la categoría" className="form-input" />
    <input type="text" name="image" placeholder="Ingrese la URL de la imagen" className="form-input" />
    <button className="form-button">Agregar producto</button>
    </form>
</section>

        </div>
    )    
}

export { Products }