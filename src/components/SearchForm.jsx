import React from 'react'
import  {CiSearch} from 'react-icons/ci';

function SearchForm() {
  return (
    <div className='serch'>
        <input type="text" placeholder='Поиск' className='search__form'/>
        <div className='search__icon>'>
            <img src={CiSearch} alt="search" />
        </div>
    </div>
  )
}

export default SearchForm