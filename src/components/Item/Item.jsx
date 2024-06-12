import React from 'react'
import { Link } from "react-router-dom"

import "./Item.css"

function Item({ item }) {

    const formatToDollar = (num) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(num);
    };

    return (
        <Link className='item'>
            <img src={item.image} alt="furniture img" />
            <div className="info">
                <p>{item.name}</p>
                <p>{formatToDollar(item.price)}</p>
            </div>
        </Link>
    )
}

export default Item