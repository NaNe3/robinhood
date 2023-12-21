import React, { useState } from 'react'
import './App.css'

//PAGE COMPONENTS
import Access from './pages/Access'

function App() {
  const [auth, setAuth] = useState(false)
  return (
    auth ? "AUTHENITCATED" : <Access />
  )
}

export default App