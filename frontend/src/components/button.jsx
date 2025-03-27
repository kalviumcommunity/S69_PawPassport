import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button() {
    const navigate = useNavigate()

    const handleClick = () =>{
        navigate('/signup')
    }

    return(
          <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition" onClick={handleClick}>
                    Get Started 🐶
        </button> 
    )
}

export default Button