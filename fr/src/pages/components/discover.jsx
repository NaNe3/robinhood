import React, { useEffect } from 'react'

const items = [
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/acats-web-bonus@2x.png',
        header: 'Transfer accounts in',
        text: 'Earn a 1% bonus',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/option-web@2x.png',
        header: 'Options trading',
        text: 'Be bullish or bearish',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/slip_neutral-web@2x.png',
        header: 'Lend your stocks',
        text: 'Potential to earn',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/retirement-light-web@2x.png',
        header: 'Retirement',
        text: 'Get a 1% match',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/ipo_access-web@2x.png',
        header: 'IPO Access',
        text: 'Get in at IPO pricing',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/crypto-web@2x.png',
        header: 'Crypto',
        text: 'Browse coins',
    },
    {
        image: 'https://cdn.robinhood.com/feature-discovery/features/images/etfs-web@2x.png',
        header: 'ETFs',
        text: 'Diversify with funds',
    }
]

function Item({ image, header, text}) {
    return (
        <div className='dis-item'>

            <img className='item-img' src={image}/>
            <div className='dis-item-image'></div>

            <div className='dis-item-text'>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>

        </div>
    )
}

function Discover() {

    return (
        <div style={{overflow: "hidden", width: "1040px"}}>
            <div className='discover-container'>
                <h2 className='section-title'>Discover more</h2>
                {items.map((item) => {
                    return <Item image={item.image} header={item.header} text={item.text}/>
                })}
            </div>
        </div>
    )
}

export default Discover