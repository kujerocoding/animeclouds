import React, {useState} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AnimeItem from './components/AnimeItem'
import HomePage from './components/HomePage'
import Gallery from './components/Gallery'

const App = () => {
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/anime/:id' element={<AnimeItem />} />
          <Route path='/character/:id' element={<Gallery />} />
        </Routes>
    </BrowserRouter>
    
  )
}

export default App
