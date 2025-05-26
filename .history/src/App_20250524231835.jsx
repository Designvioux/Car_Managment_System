import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

import Main from './Components/MainLayout'
import Home from './Components/Dashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
<Routes>
<Route element={<Main/>}>
<Route path='/' element={/Home}
</Route>
</Routes>
    </Router>
  )
}

export default App
