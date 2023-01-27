import React from 'react'
import { useEffect, useState } from 'react'
import getData from '../services/getData'
import Pagination from './Pagination';
import ProductItem from './ProductItem';

function ProductList() {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    useEffect( () => {
        getData().then( res => {
            setData(res);
        })
    },[]);

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProduct = data.slice(firstIndex, lastIndex);

    const paginate = pageNum => {
        setCurrentPage(pageNum)
    }

    return (
        <>
            <Pagination  productsPerPage={productsPerPage} totalProducts={data.length} paginate={paginate}/>
            {currentProduct.map( item => {
                return (
                    <ProductItem key={item.name} props={item}/>
                )
            }) }  
        </> 
    )
}

export default ProductList