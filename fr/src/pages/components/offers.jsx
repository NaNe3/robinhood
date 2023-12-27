import React, { useEffect } from 'react'

const offers = [
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'Based on your interests',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    },
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'NUMBER 2 LOLNUMBER 2 LOLZZ',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    },
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'I AM ON thREEEE',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    },
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'Based on your interests',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    },
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'Based on your interests',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    },
    {
        image: 'https://cdn.robinhood.com/card_side_image_asset_v2/ios_options_upsell/green/2x.png',
        header: 'Based on your interests',
        text: 'Bullish? Bearish? Options may fit your investment strategy, no matter your market outlook.',
        link: 'Enable options trading'
    }
]

function Offer({ image, header, text, link}) {
    return (
        <div className='offer'>
            <div className='offer-image'>
                <img src={image}></img>
            </div>
            <div className='offer-body'>
                <div className='offer-content'>
                    <p className='offer-content-header'>{header}</p>
                    <p className='offer-content-text'>{text}</p>
                    <p className='offer-link'>{link}</p>
                </div>

                <div className='offer-action'>
                    <svg fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 9.237 4.381 4.381 1.238-1.237L9.238 8l4.38-4.381-1.237-1.238-4.38 4.381-4.382-4.38-1.237 1.237 4.38 4.38-4.38 4.382 1.237 1.238L8 9.237Z" fill="var(--rh__text-color)"></path></svg>
                </div>

            </div>
        </div>
    )
}

function Offers() {
    const [level, setLevel] = React.useState(0)
    const [offset, setOffset] = React.useState((-1020*level).toString() + "px")
    
    useEffect(() => {
        setOffset( (-1040*level).toString() + "px")
    }, [level])

    const incUp = () => {
        if (offers.length-1 > level) {
            setLevel(level+1)
        }
    }

    const incDown = () => {
        if (level > 0) {
            setLevel(level-1)
        }
    }

    return (
        <div style={{overflow: "hidden"}}>
            <div className='offers-container' style={{ marginLeft: offset }}>
                {offers.map((offer) => {
                    return <Offer image={offer.image} header={offer.header} text={offer.link} link={offer.link} />
                })}
            </div>

            <div className='offers-shuffle'>
                <div onClick={incDown}><svg className='svg-hover' fill="black" height="12" role="img" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m7.22 1.22 1.06 1.06L4.56 6l3.72 3.72-1.06 1.06L2.44 6l4.78-4.78Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></div>
                <div>{level+1} of {offers.length}</div>
                <div onClick={incUp}><svg className='svg-hover' fill="black" height="12" role="img" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.78 10.78 3.72 9.72 7.44 6 3.72 2.28l1.06-1.06L9.56 6l-4.78 4.78Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></div>
            </div>
        </div>
    )
}

export default Offers