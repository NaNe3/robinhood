import React from 'react'
import './graph.css'

function Graph() {
    return (
        <div className='stock-graph'>
            <h1>$719.40</h1>
            <p><svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 13 8 3l6 10H2Z" fill="var(--rh__text-color)"></path></svg><span style={{color: "#00c805", fontWeight: "800", fontSize: "14px"}}>$7.59 (1.07%)</span>Today</p>
        </div>
    )
}

export default Graph