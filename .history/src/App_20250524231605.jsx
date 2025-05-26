import { useState } from 'react'

import './App.css'
import { BrowserRouter as Route } from 'react-router-dom'

import Main from './Components/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Main/>
    </>
  )
}

export default App
