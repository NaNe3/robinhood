import React, { useEffect } from 'react'
import './Home.css'

import Sidebar from '../components/sidebar'
import Graph from '../components/graph'

function Home() {
    useEffect(() => {
        document.title = 'Investing | Robinhood'
    })

    return (
        <div className='content-container'>
            <div className='main'>
                <Graph />
            </div>

            <Sidebar />
        </div>
    )
}

export default Home