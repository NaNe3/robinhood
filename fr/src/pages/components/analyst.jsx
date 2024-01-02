import React, { useState } from 'react'

function Analyst() {
    const [buy, setBuy] = useState(56.7)
    const [hold, setHold] = useState(31.9)
    const [sell, setSell] = useState(11.4)

    return (
        <div className='section-container'>
            <div className='analyst-container'>
                <div className='ratings-circle'>
                    <h2>84%</h2>
                    <p>of 58 ratings</p>
                </div>

                <div className='analyst-opinions'>
                    <div className='op-row'>
                        <div className='op-label'>
                            <p>Buy</p>
                        </div>
                        <div className='op-tracker'>
                            <div className='op-bar'>
                                <div className='op-bar-fill' style={{width: `${buy}%`}}></div>
                                <p>{buy}%</p>
                            </div>
                        </div>
                    </div>
                    <div className='op-row'>
                        <div className='op-label'>
                            <p>Hold</p>
                        </div>
                        <div className='op-tracker'>
                            <div className='op-bar'>
                                <div className='op-bar-fill' style={{width: `${hold}%`}}></div>
                                <p>{hold}%</p>
                            </div>
                        </div>
                    </div>
                    <div className='op-row'>
                        <div className='op-label'>
                            <p>Sell</p>
                        </div>
                        <div className='op-tracker'>
                            <div className='op-bar'>
                                <div className='op-bar-fill' style={{width: `${sell}%`}}></div>
                                <p>{sell}%</p>
                            </div>
                        </div>
                    </div>
                

                    <div className='op-comments'>
                        <div className='op-comment'>
                            <p className='quien'>Bulls say</p>
                            <p>Just do it bruh</p>
                            <a>Read more</a>
                            <div className='op-comment-footer'>
                                <p className='op-info'>Morningstar</p>
                                <p className='op-info'>Published on December 5, 2023</p>
                            </div>
                        </div>
                        <div className='op-comment'>
                            <p className='quien'>Bears say</p>
                            <p>I hate risk! I actually am just a little scaredy cat lol. I dont know how to do anything. So due to the lack of knowledge that I posses realting to the world of investing, I recommend that you not invest in this specific stock</p>
                            <a>Read more</a>
                            <div className='op-comment-footer'>
                                <p className='op-info'>Morningstar</p>
                                <p className='op-info'>Published on December 5, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analyst