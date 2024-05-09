import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
import Error from './pages/Error'
import './App.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/success' element={<Success />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
    </div>
  )
}

export default App