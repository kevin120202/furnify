import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, } from "react-router-dom"
import "./ProductDetails.css"
import data from "../../data/data"
import formatToDollar from "../../utilities/formatToDollar"
import { CartContext } from "../../App"

function ProductDetails() {
    const { id } = useParams()
    const [currentProduct, setCurrentProduct] = useState(null)
    const { setCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        setCurrentProduct(data.filter(product => product.id === id)[0])
    }, [id])

    if (!currentProduct) {
        return <p>Loading...</p>
    }

    const addQuantity = () => {
        setQuantity(quantity + 1)
    }

    const minusQuantity = () => {
        setQuantity(quantity - 1)
    }

    const addToCart = () => {
        const itemToAdd = {
            ...currentProduct,
            amount: quantity
        }

        let newCart = []

        setCart(prevCart => {
            if (prevCart.some(item => item.id === currentProduct.id)) {
                return prevCart.map(item => (
                    item.id === currentProduct.id ? { ...item, amount: quantity } : item
                ))
            } else {
                prevCart.map(item => {
                    newCart.push(item)
                })
                newCart.push(itemToAdd)
                return newCart
            }
        })
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
                    <div className="quantity-btn">
                        <button onClick={minusQuantity} disabled={quantity <= 1 && true}>-</button>
                        <p>{quantity}</p>
                        <button onClick={addQuantity}>+</button>
                    </div>
                    <button className="add-to-cart" onClick={addToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails