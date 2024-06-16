import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Products.css"
import data from "../../data/data"
import formatToDollar from "../../utilities/formatToDollar"


export default function Products() {
    const [products, setProducts] = useState(data)

    const productsEls = products.map(product => (
        <div key={product.id}>
            <Link to={product.id}>
                <img src={product.image} alt="image" className='products-img' />
                <div className="product-sub">
                    <p>{product.name}</p>
                    <p>{formatToDollar(product.price)}</p>
                </div>
            </Link>
        </div>
    ))

    return (
        <div className='pages-container'>
            <h2>Furnitures</h2>
            <div className="products-grid">
                {productsEls}
            </div>
        </div>
    )
}
