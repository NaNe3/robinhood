import React, { useState } from 'react'
import '../modules/Home.css'
import '../Robinhood.css'

function Stock({ ticker }) {
    const [state, setState] = useState(Math.random() > 0.5 ? "bull" : "bear")
    return (
        <div className='stock'>
            <div className='stock-title'>
                <h3>{ticker}</h3>
                <p>4,732.48</p>
            </div>
            <div className='stock-graph'>
                <img src={`./src/pages/assets/${state}.png`} alt='doge-graph' />
            </div>
            <div className='stock-price'>
                <p>$0.09446</p>
                <p className={`${state}`}>{state == "bull" ? "+" : "-"}1.64%</p>
            </div>
        </div>
    )
}

export default Stock