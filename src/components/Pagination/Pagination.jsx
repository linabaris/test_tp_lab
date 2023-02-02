import React from 'react'

function Pagination( {productsPerPage, totalProducts, paginate, currentPage, handleChangeAmount}) {

  const pageNumbers = [];

  for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className='pagination'>
      <button className='pagination__btn_prev' onClick={() => {paginate(currentPage-1)}}></button>
      {pageNumbers.map((num) => (
        <button className='pagination__btn' key={num} onClick={() => paginate(num)}>{num}</button>
      ))}
      <button className='pagination__btn_next' onClick={() => {paginate(currentPage+1)}}></button>
      <div className="pagination__amount">
        <span className='pagination__text'>Показывать по: </span>
        <select className='pagination__select' onChange={(e) => handleChangeAmount(e)}>
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="15">15</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination