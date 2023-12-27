import React, {useState} from 'react'

const trends = [
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/24_hour_market/circle_28/2x.png",
        name: "24 Hour Market"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/crypto/circle_28/2x.png",
        name: "Tradable Crypto"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/ipo_access/circle_28/2x.png",
        name: "IPO Access"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/altcoins/circle_28/2x.png",
        name: "Altcoins"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/100_most_popular/circle_28/2x.png",
        name: "100 Most Popular"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/daily_movers/circle_28/2x.png",
        name: "Daily Movers"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/cannabis/circle_28/2x.png",
        name: "Cannabis"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/upcoming_earnings/circle_28/2x.png",
        name: "Upcoming Earnings"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/technology/circle_28/2x.png",
        name: "Technology"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/tech_media_telecom/circle_28/2x.png",
        name: "Tech, Media & Telecom"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/energy/circle_28/2x.png",
        name: "Energy"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/etfs/circle_28/2x.png",
        name: "ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/pharma/circle_28/2x.png",
        name: "Pharma"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/newly_listed_crypto/circle_28/2x.png",
        name: "Newly Listed Crypto"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/growth_and_value_etfs/circle_28/2x.png",
        name: "Growth & Value ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/energy_water/circle_28/2x.png",
        name: "Energy & Water"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/healthcare/circle_28/2x.png",
        name: "Healthcare"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/real_estate/circle_28/2x.png",
        name: "Real Estate"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/consumer_goods/circle_28/2x.png",
        name: "Consumer Goods"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/software/circle_28/2x.png",
        name: "Software"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/business/circle_28/2x.png",
        name: "Business"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/automotive/circle_28/2x.png",
        name: "Automotive"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/banking/circle_28/2x.png",
        name: "Banking"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/sector_etfs/circle_28/2x.png",
        name: "Sector ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/finance/circle_28/2x.png",
        name: "Finance"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/real_estate_etfs/circle_28/2x.png",
        name: "Real Estate ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/healthcare_supplies/circle_28/2x.png",
        name: "Healthcare Supplies"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/bond_etfs/circle_28/2x.png",
        name: "Bond ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/commodities_etfs/circle_28/2x.png",
        name: "Commodities ETFs"
    },
    {
        image: "https://cdn.robinhood.com/app_assets/list_illustrations/china/circle_28/2x.png",
        name: "China"
    },

]

function Trend({ image, list }) {
    return (
        <div className='trend'>
            <img src={image} alt='trend' />
            <p>{list}</p>
        </div>
    )
}

function Trending() {
    const [show, setShow] = useState(false)
    const showToggle = () => {
        setShow(!show)
    }

    return (
        <div className='trending-container'>
            <div className='section-title'>
                <h2>Trending lists</h2>

                <a onClick={showToggle}>{show ? "Show Less": "Show More"}</a>
            </div>

            <div className='trending-lists' style={show ? {height: "auto"} : {height: "160px"}}>
                {
                    trends.map((list) => {
                        return <Trend image={list.image} list={list.name} />
                    })
                }
            </div>

        </div>
    )
}

export default Trending