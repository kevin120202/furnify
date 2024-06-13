import React from 'react'
import { Link } from "react-router-dom"
import formatToDollar from '../../utilities/formatToDollar';

import "./Item.css"

function Item({ item }) {

    return (
        <Link className='item' to={`/${item.category}/${item.id}`}>
            <img src={item.image} alt="furniture img" />
            <div className="info">
                <p>{item.name}</p>
                <p>{formatToDollar(item.price)}</p>
            </div>
        </Link>
    )
}

export default Item