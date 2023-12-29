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
        time: "37m",
        title: "Congressman Buys 1 Share Of NVidia: Smaller Size Than Pelosis But First Stock Buy In Months",
        ticker: "NVDA",
        change: "0.31%",
        image: "https://images.robinhood.com/t-uxJOOq7k4CgDp3_pLAo6QH57M/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL0NhcGl0b2wtTnZpZGlhLVNodXR0ZXJzdG9jay5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
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
        time: "37m",
        title: "Congressman Buys 1 Share Of NVidia: Smaller Size Than Pelosis But First Stock Buy In Months",
        ticker: "NVDA",
        change: "0.31%",
        image: "https://images.robinhood.com/t-uxJOOq7k4CgDp3_pLAo6QH57M/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL0NhcGl0b2wtTnZpZGlhLVNodXR0ZXJzdG9jay5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
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
        time: "37m",
        title: "Congressman Buys 1 Share Of NVidia: Smaller Size Than Pelosis But First Stock Buy In Months",
        ticker: "NVDA",
        change: "0.31%",
        image: "https://images.robinhood.com/t-uxJOOq7k4CgDp3_pLAo6QH57M/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL0NhcGl0b2wtTnZpZGlhLVNodXR0ZXJzdG9jay5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
    {
        company: "Benzinga",
        time: "37m",
        title: "Congressman Buys 1 Share Of NVidia: Smaller Size Than Pelosis But First Stock Buy In Months",
        ticker: "NVDA",
        change: "0.31%",
        image: "https://images.robinhood.com/t-uxJOOq7k4CgDp3_pLAo6QH57M/aHR0cHM6Ly9jZG4uYmVuemluZ2EuY29tL2ZpbGVzL2ltYWdlcy9zdG9yeS8yMDIzL0NhcGl0b2wtTnZpZGlhLVNodXR0ZXJzdG9jay5wbmc_d2lkdGg9MTIwMCZoZWlnaHQ9ODAwJmZpdD1jcm9w"
    },
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