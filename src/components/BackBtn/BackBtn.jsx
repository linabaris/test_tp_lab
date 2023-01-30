import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import './backbtn.css'

function BackBtn() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate('/')
    }
  return (
    <div className="btn">
      <IoIosArrowBack className='back-arrow'/>
      <button 
          className='btn-back'
          onClick={handleGoBack}>
              Назад
      </button>
    </div>
  )
}

export default BackBtn