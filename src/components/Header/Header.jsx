import React, { useState } from 'react'
import "./Header.css"
import { Link, NavLink } from "react-router-dom"
import { BsCart } from "react-icons/bs";

function Header() {
    const [showCart, setShowCart] = useState(false)

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const onShowCart = () => {
        setShowCart(prev => !prev)
    }

    return (
        <header>
            <Link className='site-logo' to="/">Furnify</Link>
            <nav>
                <ul>
                    <li><NavLink to="/"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Home</NavLink></li>
                    <li><NavLink to="/living"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Living</NavLink></li>
                    <li><NavLink to="/dining"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Dining</NavLink></li>
                    <li><NavLink to="/bedroom"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >Bedroom</NavLink></li>
                    <li><BsCart className='cart' onClick={onShowCart} /></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header