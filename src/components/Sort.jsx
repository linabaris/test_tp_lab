import React from 'react'
import './sort.css'

function Sort() {
  return (
    <div className='sort'>
        <div className="sort-title">Сортировать:</div>
        <div className="sort__category">по названию</div>
        <div className="sort__category">по просмотрам</div>
        <div className="sort__category">по дате начала</div>
        <div className="sort__category">по дате окончания</div>
    </div>
  )
}

export default Sort