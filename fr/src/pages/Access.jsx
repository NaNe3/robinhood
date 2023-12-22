import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import './Access.css'

import SignIn from './SignIn'
import SignUp from './SignUp'

function Access({ setAuth }) {
    const [signin, setSignin] = useState(true)

    return (
        <>
            {signin ? <SignIn setSignIn={setSignin} setAuth={setAuth} /> : <SignUp setSignIn={setSignin} setAuth={setAuth} />}
        </>
    )
}

export default Access