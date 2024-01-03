import React, { useState, useEffect } from 'react'
import './Investing.css'

import Sidebar from '../components/sidebar'
import Graph from '../components/graph'
import DepositModal from '../components/deposit-modal'

import Offers from '../components/offers'
import Discover from '../components/discover'
import Trending from '../components/trending'
import News from '../components/news'
import Articles from '../components/articles'

function Investing() {
    useEffect(() => {
        document.title = 'Investing | Robinhood'
    })

    const [stocks, setStocks] = useState(sessionStorage.getItem('stocks'))
    const [crypto, setCrypto] = useState(sessionStorage.getItem('crypto'))
    const [lists, setLists] = useState(sessionStorage.getItem('lists'))
    const [bp, setBp] = useState(sessionStorage.getItem('bp'))

    console.log(stocks)
    console.log(crypto)

    const toggleDepositBox = (e) => {
        const depositBox = document.querySelector('.buy-deposit-container')
        depositBox.classList.toggle('toggled')
        document.getElementById("deposit-box").style.opacity = (document.getElementById("deposit-box").style.opacity == 0 ? 1 : 0)
    }

    const toMoney = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return (
        <div className='content-container'>
            <div className='main'>
                <Graph type="main" />
                <div className='buy-deposit-container'>
                    <div className='info-container' onClick={toggleDepositBox}>
                        <div className='buying-power'>
                            <p>Buying power</p>
                            <p>${toMoney(bp)}<svg style={{ marginLeft: "10px" }} fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m1.715 6.285 1.237-1.237L8 10.096l5.048-5.048 1.238 1.237L8 12.571 1.715 6.285Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></p>
                        </div>

                    </div>

                    <div id='deposit-box'>
                        <div className='deposit-row'>
                            <p style={{color: "#6a7278"}}>Brokerage cash</p>
                            <p>${toMoney(bp)}</p>
                        </div>
                        <div className='deposit-row' style={{fontWeight: "600", borderTop: "1px solid #e3e9ed"}}>
                            <p>Total</p>
                            <p>${toMoney(bp)}</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "20px"}}>
                            <button id='deposit-btn-1'>Enable margin</button>
                            <button id='deposit-btn-2' onClick={() => {document.querySelector('.deposit-modal').style.display="block"}}>Deposit funds</button>
                        </div>
                    </div>

                </div>


                <Offers />
                <Discover />
                <Trending />
                <News />
                <Articles />

                <div className='invest-bottom'>
                    <p>For more information, see our <a>Disclosures</a> and <a>Privacy Policy</a></p>
                    <p>Options are risky and aren’t suitable for all investors. To learn more, read the <a>Options Disclosure Document</a></p>
                </div>  
            </div>

            <Sidebar stocks={stocks} crypto={crypto} lists={lists} />

            <DepositModal setBp={setBp} />
        </div>
    )
}

export default Investing