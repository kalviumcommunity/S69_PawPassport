import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import About from './pages/about.jsx'
import Users from './components/users.jsx';
// import Signin from './pages/signup.jsx';
import Signup from './pages/signup.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/read" element={<Users/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
