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
                        </div>
                       <div className='form-group'>
                            <button type='submit'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Acccess