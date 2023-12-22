import React, { useState } from 'react'
import './App.css'

//PAGE COMPONENTS
import Access from './pages/Access'
import Robinhood from './pages/Robinhood'

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem('id') ? true : false)

  return (
    auth ? <Robinhood /> : <Access setAuth={setAuth} />
  )
}

export default App