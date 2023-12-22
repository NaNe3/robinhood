import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './Robinhood.css'

import Home from './components/Home'

function Robinhood() {
    return (
        <div id='robinhood'>
            <BrowserRouter>
                <div id='nav-bar'>
                    <img id='logo' src='./src/pages/assets/rh.png' alt='robinhood-logo' />

                    <div className="search-bar">
                        <img src="./src/pages/assets/s.png" alt="search-icon" />
                        <input type="text" placeholder='Search' />
                    </div>

                    <Link to='/'>Rewards</Link>
                    <Link to='/'>Investing</Link>
                    <Link to='/'>Crypto</Link>
                    <Link to='/'>Spending</Link>
                    <Link to='/'>Retirement</Link>
                    <Link to='/'>Notifications</Link>
                    <Link to='/'>Account</Link>
                </div>

                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/stocks' element={<Stocks />} /> */}
                    {/* <Route path='/earnings' element={<Earnings />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Robinhood