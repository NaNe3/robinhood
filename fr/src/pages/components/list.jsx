import React from 'react'

import Stock from './stock'

function List({ name, icon, tickers }) {

    const handleCollapse = (e) => {
        if (e.target.className.includes('closed')) {
            e.target.classList.remove('closed');
            e.target.style.animation = "rotate-back 0.2s ease-in-out forwards";
            e.target.parentElement.parentElement.parentElement.childNodes[1].style.display = 'block';
        } else {
            e.target.classList.add('closed');
            e.target.style.animation = "rotate 0.2s ease-in-out forwards";

            e.target.parentElement.parentElement.parentElement.childNodes[1].style.display = 'none';
        }
    }


    return (
        <div className='list'>
            <div className='list-header'>

                <div className='list-identifier'>
                    <div className='list-icon'>
                        <p>{icon}</p>
                    </div>
                    <h3>{name}</h3>
                </div>

                <div className='list-options'>
                    <p onClick={handleCollapse}>▲</p>
                </div>

            </div>
            <div className='list-tickers'>
                {
                    tickers.map((ticker) => {
                        return (
                            <Stock type="stock" ticker={ticker} quantity={0} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List