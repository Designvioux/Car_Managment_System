import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

import Main from './Components/MainLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
<Routes>
<Route element={<Main/>}>
<Route

</Route>
</Routes>
    </Router>
  )
}

export default App
