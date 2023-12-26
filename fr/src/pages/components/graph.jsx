import React from 'react'
import './graph.css'

function Graph() {
    const changeTimeConstraints = (e) => {
        const clicked = e.target;
        document.querySelector('.selected-time').classList.remove('selected-time');

        if (clicked.classList.contains('time')) {
            e.target.classList.add('selected-time');
        } else {
            e.target.parentElement.classList.add('selected-time');
        }
    }

    return (
        <div className='graph'>
            <h1>$719.40</h1>
            <p><svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 13 8 3l6 10H2Z" fill="var(--rh__text-color)"></path></svg><span style={{color: "#00c805", fontWeight: "800", fontSize: "14px"}}>$7.59 (1.07%)</span>Today</p>

            <img src='./src/pages/assets/graph.png'></img>

            <div className='graph-selection-bar'>
                <div className='time-selection'>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>LIVE</p>
                    </div>
                    <div className='time selected-time' onClick={changeTimeConstraints}>
                        <p>1D</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>1W</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>1M</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>3M</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>YTD</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>1Y</p>
                    </div>
                    <div className='time' onClick={changeTimeConstraints}>
                        <p>ALL</p>
                    </div>
                </div>
                <div className='option'>
                    <svg fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 10.45a2.45 2.45 0 1 0 0-4.9 2.45 2.45 0 0 0 0 4.9Z" fill="var(--rh__text-color)"></path><path clip-rule="evenodd" d="M15 6.6v2.8l-1.68.28c-.07.28-.21.63-.35.91l.98 1.4-1.96 1.96-1.4-.98c-.28.14-.56.28-.91.35L9.4 15H6.6l-.28-1.68a4.86 4.86 0 0 1-.91-.35l-1.4.98-1.96-1.96.98-1.4c-.14-.28-.28-.56-.35-.91L1 9.4V6.6l1.68-.28c.07-.28.21-.63.35-.91l-.98-1.4 1.96-1.96 1.4.98c.28-.14.63-.28.91-.35L6.6 1h2.8l.28 1.68c.28.07.63.21.91.35l1.4-.98 1.96 1.96-.98 1.4c.14.28.28.56.35.91L15 6.6Zm-7 5.35a3.95 3.95 0 1 0 0-7.9 3.95 3.95 0 0 0 0 7.9Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Graph