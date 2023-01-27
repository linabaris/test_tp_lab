import React from 'react'
import BackBtn from '../components/BackBtn'
import ProductCard from '../components/ProductCard'

const Card = () => {
  return (
    <div className='card'>
        <div className="card__wrapper">
            <BackBtn/>
            <div className="card__container">
                <ProductCard/>
            </div>
        </div>
    </div>
  )
}

export default Card