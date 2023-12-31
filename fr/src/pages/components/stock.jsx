import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../modules/Investing.css'
import '../Robinhood.css'

function Stock({ type, ticker, quantity }) {
    const [state, setState] = useState(Math.random() > 0.5 ? "bull" : "bear")
    const navigate = useNavigate()

    return (
        <div id={'stock-' + ticker} className='stock' onClick={() => navigate('/' + type + '/' + ticker)}>
            <div className='stock-title'>
                <h3>{ticker}</h3>
                <p>{quantity != 0 ? quantity : ""} { type != "crypto" && quantity!=0 ? "Shares" : "" }</p>
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