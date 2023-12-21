import React, { useEffect } from 'react'
import './Access.css'

function Acccess() {
    useEffect(() => {
        document.title = "Log In | Robinhood";

    }, [])

    return (
        <div id='access'>

            <div className='left'>
                <img src='https://cdn.robinhood.com/assets/generated_assets/webapp/web-platform-prefetch-sdp/member/9435691b466061dc75b0.jpg' />
            </div>

            <div className='right'>
                <div className='access-container'>
                    <h2>Log in to Robinhood</h2>
                    <form id='signin'>
                        <div className='form-group'>
                            <label htmlFor='username'>Email</label>
                            <input type='text' id='username' />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <div className='form-group'>
                            <input type='checkbox' id='remember' />
                            <p style={{display: "inline", fontSize: "13px", fontWeight: "500", marginTop: "-10px"}}>Keep me logged in for up to 30 days</p>
                        </div>
                        <div className='form-group'>
                            <a href='#'>Forgot your password?</a>
                            <a href='#'>Forgot your email address?</a>
                        </div>
                        <div className='form-group' style={{marginTop: "30px"}}>
                            <button type='submit'>Log In</button>
                        </div>

                        <div className='line-text'>
                            <p>or</p>
                        </div>

                        <div className='form-group'>
                            <button><svg style={{margin: "-3px 10px -3px 0px "}} fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4.75 7.004h-1.5V14h9.5V7.004h-1.5V5.25a3.25 3.25 0 1 0-6.5 0v1.754Zm1.5 0h3.5V5.25a1.75 1.75 0 1 0-3.5 0v1.754Z" fill="white" fill-rule="evenodd"></path></svg>Log in with passkeys</button>
                        </div>
                        <div className='form-group' style={{marginTop: "50px"}}>
                            <p style={{fontSize: "14px"}}>Not on Robinhood? <a href='#' style={{display: "inline"}}>Create an account</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Acccess