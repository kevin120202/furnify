import React, { useState } from 'react'
import "./Products.css"
import data from "../../data/data"
import formatToDollar from "../../utilities/formatToDollar"

function Products() {
    const [products, setProducts] = useState(data)

    const productsEls = products.map(product => (
        <div key={product.id}>
            <img src={product.image} alt="image" className='product-img' />
            <div className="product-sub">
                <p>{product.name}</p>
                <p>{formatToDollar(product.price)}</p>
            </div>
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

export default Products