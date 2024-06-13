import React, { useState, useEffect } from 'react'
import "./Dining.css"
import data from "../../data/data"
import Item from '../../components/Item/Item'

function Dining() {
    const [furnitureData, setFurnitureData] = useState(data)

    useEffect(() => {
        setFurnitureData((prev) => {
            return prev.filter(item => item.category === "dining")
        })
    }, [])

    const diningEls = furnitureData.map(item => (
        <Item item={item} key={item.id} category="dining" />
    ))

    return (
        <div className='items-container'>
            <h2>Dining Room Furniture</h2>
            <div className="grid-items">
                {diningEls}
            </div>
        </div>
    )
}

export default Dining