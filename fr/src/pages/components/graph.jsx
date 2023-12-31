import React from 'react'
import './graph.css'

function Graph({ type }) {
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
            <div className='graph-info-bar'>
                <p><svg fill="#00c805" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 13 8 3l6 10H2Z" fill="var(--rh__text-color)"></path></svg><span style={{color: "#00c805", fontWeight: "800", fontSize: "14px"}}>$7.59 (1.07%)</span>Today</p>

                <div className='graph-options'>
                    <button className='white-button'><svg fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-.3-2.7v1.2h.6V4.3h1.2v-.6h-1.2V2.5h-.6v1.2H9.5v.6h1.2ZM3.904 6.02c-.057-2.073 1.55-3.78 3.618-3.997a3.973 3.973 0 0 0-.45 1.217c-1.238.37-2.093 1.487-2.058 2.75V7.4c0 .8-.064 1.637-.258 2.39a6.065 6.065 0 0 1-.026.1h6.516a8.965 8.965 0 0 1-.25-1.89H11c.382 0 .752-.054 1.102-.154.021.745.101 1.457.304 2.044.16.463.395.848.737 1.11H2.858c.317-.262.548-.647.71-1.11.247-.703.336-1.586.336-2.49V6.02Zm5.846 6.09V12h-3.5v.333c0 .282.07.546.196.777.289.533.87.89 1.554.89s1.265-.357 1.554-.89c.126-.23.196-.495.196-.777v-.223Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></button>
                    <button className='white-button'><svg fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.444 3.5H9.005V2h5v5h-1.498V4.56L9.419 7.646 8.36 6.586 11.443 3.5Zm-6.878 9h2.439V14H2V9h1.5v2.444l3.09-3.09 1.061 1.06L4.566 12.5Z" fill="var(--rh__text-color)"></path></svg><p>Advanced</p></button>
                </div>
            </div>
            <img src={type == "main" ? '/src/pages/assets/graph.png' : '/src/pages/assets/ticker-graph.png'}></img>

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