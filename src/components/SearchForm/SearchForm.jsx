import React, { useContext, useState, useEffect } from 'react'
import { ProductDataContext } from '../../pages/Home';
import  { BsSearch } from 'react-icons/bs';
import getData from '../../services/getData'; 

function SearchForm() {

  const [data,setData] = useContext(ProductDataContext);
  const [searchVal, setSearchVal] = useState('');
  const [mutableData, setMutableData] = useState([]);

  useEffect(() => {
    getData().then(res => {
      setMutableData(res)
    })
  })

  
  const handleChangeInput = (evt) => {
    setSearchVal(evt.target.value);
    if(!evt.target.value) {
      setData(mutableData)
    } else {
      const searchedProducts = mutableData.filter( item => item.name.toLowerCase().includes(evt.target.value));
      setData(searchedProducts);
    }    
  }


  return (
    <div className='search'>
        <input 
          type="text" 
          placeholder='Поиск...' 
          className='search__form' 
          value={searchVal}
          onChange={(e) => handleChangeInput(e)}  
        />
          <BsSearch className='search__icon'/>
    </div>
  )
}

export default SearchForm