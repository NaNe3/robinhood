import React, { useEffect } from 'react'
import './Investing.css'

import Sidebar from '../components/sidebar'
import Graph from '../components/graph'

function Investing() {
    useEffect(() => {
        document.title = 'Investing | Robinhood'
    })

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

            <Sidebar />
        </div>
    )
}

export default Investing