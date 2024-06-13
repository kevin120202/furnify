import React, { useState, useEffect } from 'react'
import data from "../../data/data"
import Item from '../../components/Item/Item'

function Living() {
    const [furnitureData, setFurnitureData] = useState(data)

    useEffect(() => {
        setFurnitureData((prev) => {
            return prev.filter(item => item.category === "living")
        })
    }, [])

    const livingEls = furnitureData.map(item => (
        <Item item={item} key={item.id} category="living" />
    ))

    return (
        <div className='items-container'>
            <h2>Living Room Furniture</h2>
            <div className="grid-items">
                {livingEls}
            </div>
        </div>
    )
}

export default Living