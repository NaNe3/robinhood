import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './Ticker.css'

import Graph from '../components/graph'
import Analyst from '../components/analyst'

function Ticker() {
    const { ticker } = useParams()
    const [buy, setBuy] = useState(true)
    const [shares, setShares] = useState()
    const [listed, setListed] = useState(sessionStorage.getItem('lists').includes(ticker) ? true : false)

    const toMoney = (num) => {
        return (num > 0 ? "$": "") + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

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

    const changeShareAmount = (e) => {
        const newShares = e.target.value

        if (typeof newShares == 'number') {
            setShares(e.target.value)
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
                <div className='section-container'>
                    <p>You’re currently not taking advantage of an income opportunity. You could change that today.</p>
                </div>



                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>About</h2>
                </div>
                <div className='section-container'>
                    <p>Maplebear, Inc. engages in the design and development of an online application that offers grocery delivery and pick-up services. The firm offers Instacart which enables users to connect with personal shoppers in the area who pick up and deliver groceries from local stores. <span className='redirect'>Show more</span></p>

                    <div className='information-row'>
                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>CEO</p>
                                <p>Fidji Simo</p>
                            </div>
                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Employees</p>
                                <p>3,486</p>
                            </div>
                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Headquarters</p>
                                <p>San Francisco, California</p>
                            </div>
                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Founded</p>
                                <p>2012</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>Key statistics</h2>
                </div>
                <div className='section-container' style={{padding: "0px 20px"}}>
                    <div className='information-row'>
                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Market Cap</p>
                                <p>6.57B</p>
                            </div>
                            <div className='info-col-box'>
                                <p>High today</p>
                                <p>$24.39</p>
                            </div>
                            <div className='info-col-box'>
                                <p>52 Week High</p>
                                <p>$42.95</p>
                            </div>

                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Price-Earnings ratio</p>
                                <p>-3.53</p>
                            </div>
                            <div className='info-col-box'>
                                <p>Low today</p>
                                <p>$23.39</p>
                            </div>
                            <div className='info-col-box'>
                                <p>52 Week low</p>
                                <p>$23.03</p>
                            </div>

                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Dividend yield</p>
                                <p>_</p>
                            </div>
                            <div className='info-col-box'>
                                <p>Open price</p>
                                <p>$23.77</p>
                            </div>
                        </div>

                        <div className='information-col'>
                            <div className='info-col-box'>
                                <p>Average volume</p>
                                <p>1.66M</p>
                            </div>
                            <div className='info-col-box'>
                                <p>Volume</p>
                                <p>1.21M</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>Related lists</h2>
                </div>
                <div className='section-container'>
                    <div className='trend'>
                        <img src='https://cdn.robinhood.com/app_assets/list_illustrations/china/circle_28/2x.png' />
                        <p>China</p>
                    </div>
                    <div className='trend'>
                        <img src='https://cdn.robinhood.com/app_assets/list_illustrations/sector_etfs/circle_28/2x.png' />
                        <p>Bonds & ETFs</p>
                    </div>
                </div>



                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>Analyst ratings</h2>
                </div>
                <Analyst />

                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>History</h2>
                </div>
                <div className='section-container'>
                    <p>You currently have not made any transactions with {ticker}</p>
                </div>

                <div className='section-title' style={{margin: "0px 20px"}}>
                    <h2>People also own</h2>
                </div>
                <div className='section-container'>
                    <p>You’re currently not taking advantage of an income opportunity. You could change that today.</p>
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
                            <input onChange={changeShareAmount} value={shares} type='number' placeholder='0'></input>
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
                        <div className='ts-buy-power'>{ buy ? toMoney(sessionStorage.getItem("bp")) + " buying power available" : <p style={{margin: "0px"}}>0.202892 Shares Available - <span className='link-span'>Sell All</span></p>}</div>
                    </div>
                </div>

                <button className='option-button'>Trade {ticker} Options</button>
                <button className='option-button'>{ listed ? <svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m13.619 4.952-7.285 7.285-3.62-3.618L3.953 7.38l2.382 2.382 6.048-6.048 1.237 1.237Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg> : <svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.125 8.875V14h1.75V8.875H14v-1.75H8.875V2h-1.75v5.125H2v1.75h5.125Z" fill="var(--rh__text-color)"></path></svg>}Add to Lists</button>
            </div>
        </div>
    )
}

export default Ticker