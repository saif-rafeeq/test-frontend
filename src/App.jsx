import React from 'react'
import Auth from './Components/Auth'
import { Route, Routes } from 'react-router-dom'
import Programe from './Components/Programe'
import Allprograme from './Components/Allprograme'

const App = () => {
  return (
    <div  className='w-full h-screen'>
      
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/program" element={<Programe />} />
        <Route path="/program/allprogram" element={<Allprograme />} />
      </Routes>
      
    </div>
  )
}

export default App
