import React from 'react'
import { useParams } from 'react-router-dom'

function Ticker() {
    const { ticker } = useParams()
    return (
        <div className='ticker-container'>
            <h1>I AM LOOKING AT A STOCK: {ticker}</h1>
        </div>
    )
}

export default Ticker