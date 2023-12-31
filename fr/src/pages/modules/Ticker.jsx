import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Ticker.css'

import Graph from '../components/graph'

function Ticker() {
    const { ticker } = useParams()
    const [buy, setBuy] = useState(true)
    const [listed, setListed] = useState(sessionStorage.getItem('lists').includes(ticker) ? true : false)

    const handleSelect = (e) => {
        if (e.target.innerHTML.includes('Buy')) {
            if (!buy) {
                setBuy(true)
            }
        } else {
            if (buy) {
                setBuy(false)
            }
        }
    }

    return (
        <div className='ticker-container'>
            <div className='ticker-body'>
                <h1 className='stock-header'>Apple</h1>
                <Graph type="specific"/>

                <div className='stock-holdings'>
                    <div className='stock-holdings-container'>
                        <div className='hold-box'>
                            <p>Your market value</p>
                            <h2>$38.99</h2>
                            <div className='hold-box-row'>
                                <p>Today's return</p>
                                <p>-$0.29 (-0.74%)</p>
                            </div>
                            <div className='hold-box-row'>
                                <p>Total return</p>
                                <p>-$0.29 (-0.74%)</p>
                            </div>                        
                        </div>
                        <div className='hold-box'>
                            <p>Your average cost</p>
                            <h2>$182.26</h2>
                            <div className='hold-box-row'>
                                <p>Shares</p>
                                <p>200</p>
                            </div>
                            <div className='hold-box-row'>
                                <p>Portfolio diversity</p>
                                <p>5.75%</p>
                            </div>                        
                        </div>
                    </div>
                </div>


                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>Stock Lending</h2>

                    <a>Enroll in a Stock Lending Program</a>
                </div>


            </div>
            <div className='ticker-sidebar'>
                <div className='ticker-sidebar-container'>
                    <div className='ts-option-row'>
                        <p onClick={handleSelect} className={buy ? "ts-option-selected" : ""}>Buy {ticker}</p>
                        <p onClick={handleSelect} className={buy ? "" : "ts-option-selected"}>Sell {ticker}</p>
                    </div>
                    <div className='ts-sidebar-content'>
                        <div className='ts-input-row'>
                            <p>Shares</p>
                            <input type='text' inputMode='numeric' pattern='\d*' placeholder='0'></input>
                        </div>
                        <div className='ts-info-holder'>
                            <div className='ts-info-row'>
                                <p>Market Price</p><p>$192.15</p>
                            </div>
                            <div className='ts-info-row'>
                                <p>Estimated {buy ? "Cost" : "Credit"}</p><p>$0.00</p>
                            </div>
                        </div>
                        <button className='action-button'>Review Order</button>
                        <div className='ts-buy-power'>{ buy ? "$19.01 buying power available" : <p style={{margin: "0px"}}>0.202892 Shares Available - <span className='link-span'>Sell All</span></p>}</div>
                    </div>
                </div>

                <button className='option-button'>Trade {ticker} Options</button>
                <button className='option-button'>{ listed ? <svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.619 4.952-7.285 7.285-3.62-3.618L3.953 7.38l2.382 2.382 6.048-6.048 1.237 1.237Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg> : <svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.125 8.875V14h1.75V8.875H14v-1.75H8.875V2h-1.75v5.125H2v1.75h5.125Z" fill="var(--rh__text-color)"></path></svg>}Add to Lists</button>
            </div>
        </div>
    )
}

export default Ticker