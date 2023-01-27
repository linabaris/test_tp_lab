import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackBtn() {
    const history = useNavigate();
    const handleGoBack = () => {
        console.log(history)
    }
  return (
    <>
        <button 
            className='btn-back'
            onClick={handleGoBack}>
                Back
        </button>
    </>
  )
}

export default BackBtn