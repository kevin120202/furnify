import React, { useEffect, useState } from 'react'
import { useParams, Link, } from "react-router-dom"
import "./ProductDetails.css"
import data from "../../data/data"
import formatToDollar from "../../utilities/formatToDollar"

function ProductDetails() {
    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)

    useEffect(() => {
        setCurrentProduct(data.filter(product => product.id === id)[0])
    }, [id])

    if (!currentProduct) {
        return <p>Loading...</p>
    }

    return (
        <div className='pages-container'>
            <Link
                to=".."
                relative="path"
            >&larr; <span>Back</span></Link>
            <div className="details">
                <img src={currentProduct.image} alt="product image" className='product-img' />
                <div className="product-details">
                    <h3>{currentProduct.name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque assumenda nostrum porro libero quidem architecto fugit, mollitia cupiditate ipsum quos commodi aliquid perferendis, molestias ut minima cum accusamus saepe asperiores?</p>
                    <p>{formatToDollar(currentProduct.price)}</p>
                    <button className="add-to-cart">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails