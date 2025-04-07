import { useState, useEffect } from "react"
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    
    const fetchingProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
      const products = await response.json()
      setProducts(products)
    }
  
    const handleSubmit = (evento) => {
      evento.preventDefault()
      console.log("Enviando formulario!")
    }

    fetchingProducts()
  
    return (
      <div className="container">
        <h2>Productos</h2>
        <div className="grid">
          {
            products.map(product => (
              <div className="card" key={product.id}>
                <h2>{product.title}</h2>
                <img src={product.image} alt="" />
                <p>${product.price}</p>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
  

export { Products }
