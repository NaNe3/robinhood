import React from 'react'

import Articles from './articles'

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

function News() {
    return (
        <div className='news-container'>
            <div className='section-title'>
                <h2>News</h2>
            </div>

            <div className='news-box'>

                <div className='markers'>
                    <p><span className='m-cat'>S&P 500</span><span className='m-value'>4,783.35</span><span className='m-diff'><svg fill="#05c90f" height="12" role="img" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10 6 2.5l4.5 7.5h-9Z" fill="var(--rh__text-color)"></path></svg>0.04%</span></p>
                    <p><span className='m-cat'>Nasdaq</span><span className='m-value'>15,095.14</span><span className='m-diff'><svg fill="#05c90f" height="12" role="img" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10 6 2.5l4.5 7.5h-9Z" fill="var(--rh__text-color)"></path></svg>0.04%</span></p>
                    <p><span className='m-cat'>Bitcoin</span><span className='m-value'>$42,616.18</span><span className='m-diff'><svg fill="#05c90f" height="12" role="img" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 10 6 2.5l4.5 7.5h-9Z" fill="var(--rh__text-color)"></path></svg>0.04%</span></p>
                </div>

                <div className='news-box-info'>
                    <p><svg style={{padding: "5px 5px 0px 0px"}} fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.777-11.667H7.222v5.378l2.95 2.95 1.1-1.1-2.495-2.494V3.333Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg><span className='text-here'>Snacks: Thursday’s Close</span> <span className='time'>2:00 PM</span></p>
                    <p>The S&P 500 inched closer to its all-time high. The benchmark index is on track to finish the year 25% higher.</p>
                </div>
            </div>

            <Articles />
        </div>
    )
}

export default News