import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../../App'
import formatToDollar from '../../utilities/formatToDollar';
import "./Cart.css"
import { CiCircleRemove } from "react-icons/ci";

function Cart() {
    const { cart, setCart } = useContext(CartContext)
    const [total, setTotal] = useState(0)


    const addCartItemQuantity = (id) => {
        setCart(prevCart => (
            prevCart.map(item => (
                item.id === id ? { ...item, amount: item.amount + 1 } : item
            ))
        ))
    }

    const minusCartItemQuantity = (id) => {
        setCart(prevCart => (
            prevCart.map(item => (
                item.id === id ? { ...item, amount: item.amount - 1 } : item
            ))
        ))
    }

    const removeItem = (id) => {
        setCart(prevCart => (
            prevCart.filter(item => item.id != id)
        ))
    }

    const cartEls = cart.map(item => (
        <div key={item.id} className='item'>
            <img src={item.image} alt="item img" />
            <div className="cart-item-col2">
                <div className="top">
                    <h3>{item.name}</h3>
                    <CiCircleRemove className='remove-item' onClick={() => removeItem(item.id)} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id illo accusantium, dolorum unde repudiandae, sit expedita modi maiores labore voluptas aliquam sint laboriosam, voluptate cum consequuntur earum mollitia nobis!</p>
                <p>{formatToDollar(item.price * item.amount)}</p>
                <div className="quantity-btn">
                    <button onClick={() => minusCartItemQuantity(item.id)} disabled={item.amount <= 1}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={() => addCartItemQuantity(item.id)}>+</button>
                </div>
            </div>
        </div>
    ))

    useEffect(() => {
        let totalPrice = 0
        for (let item of cart) {
            totalPrice = item.price * item.amount
        }
        setTotal(totalPrice)
    }, [cart])

    console.log(cart);

    return (
        <div className='pages-container'>
            {cart.length > 0 ?
                <div>
                    <h2>Cart</h2>
                    <div className="cart-item-container">
                        {cartEls}
                    </div>
                    <div className="cart-total">
                        <p>Total: <span>{formatToDollar(total)}</span></p>
                        <button className='checkout-btn'>Checkout</button>
                    </div>
                </div> :
                <p>Cart is empty...</p>}
        </div>
    )
}

export default Cart