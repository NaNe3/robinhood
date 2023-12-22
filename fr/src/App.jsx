import React, { useState } from 'react'
import './App.css'

//PAGE COMPONENTS
import Access from './pages/Access'
import Landing from './pages/Landing'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    auth ? <Landing /> : <Access setAuth={setAuth} />
  )
}

export default App