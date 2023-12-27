import React, { useEffect } from 'react'
import './Investing.css'

import Sidebar from '../components/sidebar'
import Graph from '../components/graph'

function Investing() {
    useEffect(() => {
        document.title = 'Investing | Robinhood'
    })

    const stocks = sessionStorage.getItem('stocks')
    const crypto = sessionStorage.getItem('crypto')
    const lists = sessionStorage.getItem('lists')

    console.log(stocks)
    console.log(crypto)

    return (
        <div className='content-container'>
            <div className='main'>
                <Graph />
                <div className='info-container'>
                    <div className='buying-power'>
                        <p>Buying power</p>
                        <p>$19.01</p>
                    </div>
                </div>
            </div>

            <Sidebar stocks={stocks} crypto={crypto} lists={lists} />
        </div>
    )
}

export default Investing