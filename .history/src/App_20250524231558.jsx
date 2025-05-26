import { useState } from 'react'

import './App.css'
import {Browser}

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
