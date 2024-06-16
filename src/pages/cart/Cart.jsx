import React, { useContext } from 'react'
import { CartContext } from '../../App'
import formatToDollar from '../../utilities/formatToDollar';

function Cart() {
    const { cart, setCart } = useContext(CartContext)

    // const cartEls = 
    console.log(cart);

    return (
        <div className='pages-container'>
            <h2>Cart</h2>

        </div>
    )
}

export default Cart