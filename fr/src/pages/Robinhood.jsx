import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './Robinhood.css'

import Investing from './modules/Investing'
import Ticker from './modules/Ticker'

function Robinhood() {
    return (
        <div id='robinhood'>
            <BrowserRouter>
                <div id='nav-bar'>
                    <Link to='/'><img id='logo' src='/src/pages/assets/rh.png' alt='robinhood-logo' /></Link> 

                    <div className="search-bar">
                        <img src="/src/pages/assets/s.png" alt="search-icon" />
                        <input type="text" placeholder='Search' />
                    </div>

                    <Link to='/rewards'>Rewards</Link>
                    <Link to='/'>Investing</Link>
                    <Link to='/crypto'>Crypto</Link>
                    <Link to='/spending'>Spending</Link>
                    <Link to='/retirement'>Retirement</Link>
                    <Link>Notifications</Link>
                    <Link>Account</Link>
                </div>

                <Routes>
                    <Route path='/' element={<Investing />} />
                    <Route path='/stock/:ticker' element={<Ticker />} />
                    <Route path='/crypto/:ticker' element={<Ticker />} />
                    {/* <Route path='/stocks' element={<Stocks />} /> */}
                    {/* <Route path='/earnings' element={<Earnings />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Robinhood