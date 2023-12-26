import React from 'react'
import '../modules/Investing.css'
import '../Robinhood.css'

import Stock from './stock'

function Sidebar() {
    // cookies: id, stocks

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <h2>Cryptocurrencies</h2>
                </div>
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <div className='sidebar-header'>
                    <h2>Stocks</h2>
                </div>
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <div className='sidebar-header'>
                    <h2>Lists</h2>
                </div>
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
                <Stock ticker="DOGE" />
            </div>
        </div>   
    )
}

export default Sidebar