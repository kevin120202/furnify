import React from 'react'
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='hero'>
            <h1>The Long Weekend Sale</h1>
            <Link to="products"><button>Shop now</button></Link>
        </div>
    )
}

export default Home