import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import './Access.css'

function SignUp({ setSignIn, setAuth }) {
    useEffect(() => {
        document.title = "Log In | Robinhood";

    }, [])

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleInput = (e) => {
        if (e.target.id === 'email') {
            setEmail(e.target.value)
        } else {
            setPass(e.target.value)
        }
    }

    const shoot = () => {
        email == '' ? document.getElementById('email').style.border = "1px solid red" : document.getElementById('email').style.border = "1px solid lightgray"
        pass == '' ? document.getElementById('password').style.border = "1px solid red" : document.getElementById('password').style.border = "1px solid lightgray"
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (email != '' && pass != '') {
            fetch(`http://localhost:3000/login?email=` + email + "&password=" + pass, {
                method: 'GET',
                cache: 'no-cache',
                cors: 'no-cors'
            })
                .then(res => res.json())
                .then(data => {
                    if (data[0].email === email && data[0].password === pass) {
                        sessionStorage.setItem('id', data[0].id)
                        sessionStorage.setItem('stocks', JSON.stringify(data[0].stocks))
                        setAuth(true)
                    } else {
                        shoot()
                    }
                })
                .catch(err => console.log(err))
        } else {
            shoot()
        }
    }

    return (
        <div id='access'>

            <div className='left'>
                <img src='https://cdn.robinhood.com/assets/generated_assets/webapp/web-platform-prefetch-sdp/member/9435691b466061dc75b0.jpg' />
            </div>

            <div className='right'>
                <div className='access-container'>
                    <h2>Log in to Robinhood</h2>
                    <form id='signin' onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input type='text' id='email' onChange={handleInput} value={email} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={handleInput} value={pass} />
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
                            <p style={{fontSize: "14px"}}>Not on Robinhood? <a href='#' onClick={() => {setSignIn(false)}} style={{display: "inline"}}>Create an account</a></p>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )

}

export default SignUp