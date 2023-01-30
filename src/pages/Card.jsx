import React from 'react'
import BackBtn from '../components/BackBtn/BackBtn'
import ProductCard from '../components/ProductCard/ProductCard'
import './card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className="card__wrapper">
            <BackBtn/>
            <ProductCard/>
        </div>
    </div>
  )
}

export default Card