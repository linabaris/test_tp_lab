import React, { createContext, useEffect, useState } from 'react'
import Sort from '../components/Sort/Sort'
import SearchForm from '../components/SearchForm/SearchForm'
import ProductList from '../components/ProductList/ProductList'
import getData from '../services/getData'
import './home.css'

export const ProductDataContext = createContext();

function Home() {

  const [data, setData] = useState([]);

  useEffect( () => {
    getData().then(res => {
      setData(res)
    })
  }, []);


  return (
    <div className="home-page__wrapper">
      <header className='home-page__header'>Карточки контента </header>
        <ProductDataContext.Provider value={[data, setData]}>
          <div className="home-page__actions">
            <Sort/>
            <SearchForm/>
          </div>
          <ProductList/>
        </ProductDataContext.Provider>
    </div>
  )
}

export default Home