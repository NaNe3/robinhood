import React from 'react'
import '../modules/Investing.css'
import '../Robinhood.css'

import Stock from './stock'
import List from './list'

function Sidebar({ stocks, crypto, lists }) {
    var arrStocks = JSON.parse(stocks)
    var arrCrypto = JSON.parse(crypto)
    var arrLists = JSON.parse(lists)

    return (
        <div className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <h2>Cryptocurrencies</h2>
                </div>
                {
                    arrCrypto.map((crypto) => {
                        var crypto = JSON.parse(crypto)

                        return (
                            <Stock type="crypto" ticker={crypto.ticker} quantity={crypto.quantity} />
                        )
                    })
                }
                <div className='sidebar-header'>
                    <h2>Stocks</h2>
                </div>
                {
                    arrStocks.map((stock) => {
                        var stock = JSON.parse(stock)

                        return (
                            <Stock type="stocks" ticker={stock.ticker} quantity={stock.quantity} />
                        )
                    })
                }
                <div className='sidebar-header'>
                    <h2>Lists</h2>
                </div>
                {/* JSON.parse(arrLists[0] */}
                {
                    arrLists.map((list) => {
                        var list = JSON.parse(list)
                        
                        return (
                            <List name={list.name} icon={list.icon} tickers={list.stocks} />
                        )
                    })
                }
            </div>
        </div>   
    )
}

export default Sidebar