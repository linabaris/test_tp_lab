import React from 'react'
import Sort from '../components/Sort'
import SearchForm from '../components/SearchForm'
import ProductList from '../components/ProductList'

function Home() {
  return (
    <>
        <header className='home__header'>Карточки контента</header>
        <Sort/>
        <SearchForm/>
        <ProductList/>
    </>
  )
}

export default Home