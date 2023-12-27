import React, { useEffect } from 'react'
import './Investing.css'

import Sidebar from '../components/sidebar'
import Graph from '../components/graph'
import Offers from '../components/offers'

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
                        <p>$19.01<svg fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m1.715 6.285 1.237-1.237L8 10.096l5.048-5.048 1.238 1.237L8 12.571 1.715 6.285Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></p>
                    </div>
                </div>

                <Offers />
            </div>

            <Sidebar stocks={stocks} crypto={crypto} lists={lists} />
        </div>
    )
}

export default Investing