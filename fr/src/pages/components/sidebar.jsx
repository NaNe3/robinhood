import React, { useEffect, useState } from 'react'
import '../modules/Investing.css'
import '../Robinhood.css'

import Stock from './stock'
import List from './list'


function Sidebar({ stocks, crypto, lists }) {
    var arrStocks = JSON.parse(stocks)
    var arrCrypto = JSON.parse(crypto)
    var arrLists = JSON.parse(lists)

    const getStockInformation = () => {
        //Organize Stocks, Crypto in arrLists
        var temp = []
        arrLists.forEach(list => {
            list = JSON.parse(list)
            temp.push(list.stocks)
        })
        temp = temp.flat()

        // Organize Stocks and Crypto that are owned...
        var everything = (arrStocks.concat(arrCrypto))
        everything.forEach(stock => {
            temp.push(JSON.parse(stock).ticker)
        })

        // Compile list so that there are no repeated values...
        let listSet = new Set(temp)

        // Send that list to the server
        fetch('http://localhost:3000/stocks/sidebar', {
            method: 'POST',
            cors: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tickers: Array.from(listSet)
            })
        })
            .then(res => res.json())
            .then(data => {
                // SUCCESSSS WHERE DO I PUT THE DATA?
                var stockElements = document.getElementsByClassName('stock')
                Array.from(stockElements).forEach(element => {
                    var ticker = element.id.split('-')[1]
                    var stock = data.find(stock => stock.ticker == ticker)
                    if (stock != undefined) {
                        var change = (((stock.prices[stock.prices.length - 1] - stock.prices[stock.prices.length - 2]) / stock.prices[stock.prices.length - 2]) * 100).toFixed(2)

                        element.childNodes[2].childNodes[1].innerHTML = (change > 0 ? "+" : "") + change + '%'
                        element.childNodes[2].childNodes[0].innerHTML = '$' + stock.prices[stock.prices.length -1]
                        element.childNodes[2].childNodes[1].className = change > 0 ? 'bull' : 'bear'
                        element.childNodes[1].childNodes[0].src = change > 0 ? './src/pages/assets/bull.png' : './src/pages/assets/bear.png'
                    }
                })
            })
            .catch(err => console.log(err))
    }

    getStockInformation()

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
                            <Stock type="stock" ticker={stock.ticker} quantity={stock.quantity} />
                        )
                    })
                }
                <div className='sidebar-header'>
                    <h2>Lists</h2>
                </div>
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