import React from 'react'

function Pagination( {productsPerPage, totalProducts, paginate}) {
  const pageNumbers = [];

  for(let i=1; i<=Math.ceil(totalProducts/productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => paginate(num)}>{num}</button>
      ))}
    </div>
  )
}

export default Pagination