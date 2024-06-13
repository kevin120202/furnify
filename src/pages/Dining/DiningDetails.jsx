import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"
import data from "../../data/data"
import formatToDollar from '../../utilities/formatToDollar'

function DiningDetails() {
    const [diningFurnitureDetails, setDiningFurnitureDetails] = useState(data)

    const params = useParams()

    useEffect(() => {
        setDiningFurnitureDetails((prev) => {
            return prev.filter(item => item.id === params.id)
        })
    }, [params.id])

    return (
        <div className='details'>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back</span>
            </Link>
            <div className="grid-details">
                <img src={diningFurnitureDetails[0].image} alt="furniture details image" />
                <div className="furniture-details">
                    <h2>{diningFurnitureDetails[0].name}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum accusamus officiis sit harum tenetur, deleniti totam neque. Harum quod veritatis minus a! Aspernatur esse quod eveniet voluptatem quaerat dolorem quam?</p>
                    <h3>{formatToDollar(diningFurnitureDetails[0].price)}</h3>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default DiningDetails