import React from 'react'

const articles = [
    {
        company: "Benzinga",
        time: "37m",
        title: "Congressman Buys 1 Share Of NVidia: Smaller Size Than Pelosis But First Stock Buy In Months",
        ticker: "NVDA",
        change: "0.31%",
        image: "https://images.robinhood.com/t-uxJOOq7k4CgDp3_pLAo6QH57M/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL0NhcGl0b2wtTnZpZGlhLVNodXR0ZXJzdG9jay5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
    {
        company: "Benzinga",
        time: "2h",
        title: "Barack Obama Shares 13 Favorite Movies Of 2023, Including 3 He Produced: Did 'Barbie' Or 'Oppenheimer' Make The List",
        ticker: "NFLX",
        change: "0.05%",
        image: "https://images.robinhood.com/FmR8PEzY2Eoxcn2Ufree7adtJNI/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL1ByZXNpZGVudC1CYXJhY2stT2JhbWFfMC5qcGVnP3dpZHRoPTEyMDAmaGVpZ2h0PTgwMCZmaXQ9Y3JvcA"
    },
    {
        company: "Investor's Business Daily",
        time: "3h",
        title: "Stock Market Hits New Highs But Fades Late; Nvidia, Tesla Holds Near Buy Points",
        ticker: "TSLA",
        change: "2.38%",
        image: "https://images.robinhood.com/yLGGM-VgGMKXcums5UWCsV-bEeo/aHR0cHM6Ly93d3cuaW52ZXN0b3JzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8xMi9TdG9jay1UZXNsYWxvZ28tMDEtYWRvYmUuanBn"
    },
    {
        company: "Yahoo Finance",
        time: "3h",
        title: "Apple is 'behing the curve' on generative AI: Analyst",
        ticker: "AAPL",
        change: "0.27%",
        image: "https://images.robinhood.com/wjC4nA5-7w7B5YcrPNNRzsdHwFk/aHR0cHM6Ly9zLnlpbWcuY29tL255L2FwaS9yZXMvMS4yL094d0c0WTVSR2tpQWRCaTRFTWlVQ2ctLS9ZWEJ3YVdROWFHbG5hR3hoYm1SbGNqdDNQVEV5TURBN2FEMDJOelktL2h0dHBzOi8vcy55aW1nLmNvbS9vcy9jcmVhdHItdXBsb2FkZWQtaW1hZ2VzLzIwMjMtMTIvNDkwOTllYjAtYTVjZC0xMWVlLThlZjctMjExODgwOThjOWI2"
    },
    {
        company: "Investor's Business Daily",
        time: "4h",
        title: "Dow Jones Futures: Tesla Falls Below Buy Point; Hot IPO Hits Profit-Taking Zone",
        ticker: "TSLA",
        change: "2.35%",
        image: "https://images.robinhood.com/0KGsIWrN91TmVHGL5zZ3hyQKh2Y/aHR0cHM6Ly93d3cuaW52ZXN0b3JzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMi8xMC9TdG9jay1tb25leXRlc2xhLTAxLXNodXR0LmpwZw"
    },
    {
        company: "Yahoo Finance",
        time: "5h",
        title: "Altice, AMD, Penn Entertainment: Trending Tickers",
        ticker: "NVDA",
        change: "0.27%",
        image: "https://images.robinhood.com/dIZKQSZB7YY2aDN6i-Divmdpbvs/aHR0cHM6Ly9zLnlpbWcuY29tL255L2FwaS9yZXMvMS4yL01yYlVQNlRWM241aElSRHlZeXF6SWctLS9ZWEJ3YVdROWFHbG5hR3hoYm1SbGNqdDNQVEV5TURBN2FEMDJOelEtL2h0dHBzOi8vcy55aW1nLmNvbS9vcy9jcmVhdHItdXBsb2FkZWQtaW1hZ2VzLzIwMjMtMTIvYzFmZTAyMTAtYTViZi0xMWVlLWJmZmYtYjU2Nzc4MWZjMmM1"
    },
    {
        company: "Benzinga",
        time: "6h",
        title: "Netflix and Spotify Soar in Ratings, But What's Next for Match Group",
        ticker: "NFLX",
        change: "0.05%",
        image: "https://images.robinhood.com/5lses1JK__GyMBFaGkKniorJf8I/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzLzEyLzI4L2J6X2JyaWVmcy5qcGc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
    {
        company: "Yahoo Finance",
        time: "7h",
        title: "Better Dividend Stock: Ford or Toyota Corporation? - Yahoo Finance",
        ticker: "F",
        change: "0.48%",
        image: "https://images.robinhood.com/Vk0RH7hshA4tZ3Iep4JXoEoCUcI/aHR0cHM6Ly9zLnlpbWcuY29tL255L2FwaS9yZXMvMS4yL2xrMGtkMUxzODhLYUJQWmltNTEuaEEtLS9ZWEJ3YVdROWFHbG5hR3hoYm1SbGNqdDNQVEV5TURBN2FEMDRNREEtL2h0dHBzOi8vbWVkaWEuemVuZnMuY29tL2VuL21vdGxleWZvb2wuY29tL2JjZDNlOWM0ZTlhNTEzNDA4OTllNjFmNjY2MTgyNWFk"
    },
    {
        company: "Benzinga",
        time: "7h",
        title: "Grocery Wars - Walmart Maintains Dominance With Lowest Prices In December, Target Retains #2 Spot: Analyst",
        ticker: "TGT",
        change: "0.09%",
        image: "https://images.robinhood.com/2EiSRccRg1dR6FiTASyTfnNmBBM/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzLzEyLzI4L3dtdF9jby5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
    {
        company: "Benzinga",
        time: "9h",
        title: "LinkedIn's Advertising Boom: How It's Becoming the New Go-To Platform for Digital Marketers",
        ticker: "MSFT",
        change: "0.40%",
        image: "https://images.robinhood.com/34e74kGvmcGaA1iz7OtaRWylUGs/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzLzEyLzI4L2xpbmtlZGluX2Nob2NvbGF0ZXMuanBnP3dpZHRoPTEyMDAmaGVpZ2h0PTgwMCZmaXQ9Y3JvcA"
    },
    {
        company: "Yahoo Finance",
        time: "10h",
        title: "Morgan Stanley, Starbucks, Tesla: 2024 leadership in focus",
        ticker: "SBUX",
        change: "0.75%",
        image: "https://images.robinhood.com/yp60xCIA8DgXhWaCQgmdmJj8rTM/aHR0cHM6Ly9zLnlpbWcuY29tL255L2FwaS9yZXMvMS4yL3pnS3pJc2lFVUIxZ1hIN1g5TzNzT2ctLS9ZWEJ3YVdROWFHbG5hR3hoYm1SbGNqdDNQVEV5TURBN2FEMDJOelktL2h0dHBzOi8vcy55aW1nLmNvbS9vcy9jcmVhdHItdXBsb2FkZWQtaW1hZ2VzLzIwMjMtMTIvZjc4ZWIxODAtYTU5OC0xMWVlLWJmNjktMDAxZmMzZjFlNjRk"
    }
]

function Article({ company, time, title, ticker, change, image }) {
    return (
        <div className='article'>
            <div className='article-container'>

                <p className='article-info-head'><span className='company'>{company}</span><span className='time-offset'>{time}</span></p>
                <div className='article-content-container'>
                    <div className='article-content'>
                        <p className='article-title'>{title}</p>
                        <p className='article-ticker'><span className='article-ticker-text'>{ticker}</span><span className='article-ticker-offset'>{change}</span></p>
                    </div>
                    <div className='article-image'>
                        <img src={image} />
                    </div>
                </div>

            </div>
        </div>
    )
}

function Articles() {
    return (
        <div className='articles-container'>

            {
                articles.map((article) => {
                    return (
                        <Article
                            company={article.company}
                            time={article.time}
                            title={article.title}
                            ticker={article.ticker}
                            change={article.change}
                            image={article.image}
                        />
                    )
                })
            }

        </div>
    )
}

export default Articles