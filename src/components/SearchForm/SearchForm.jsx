import React from 'react'
import  { BsSearch } from 'react-icons/bs';
import './searchfroms.css'

function SearchForm() {
  return (
    <div className='serch'>
        <input type="text" placeholder='Поиск...' className='search__form'/>
          <BsSearch className='search__icon'/>
    </div>
  )
}

export default SearchForm