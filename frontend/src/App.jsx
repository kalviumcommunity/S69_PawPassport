import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import About from './pages/about.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
