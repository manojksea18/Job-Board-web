import React,{ useState } from 'react'

import { BrowserRouter , Route, Routes } from 'react-router-dom';
import homePage from './pages/homePage';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>

      <Route path="/" Component= {homePage} />

      </Routes>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
