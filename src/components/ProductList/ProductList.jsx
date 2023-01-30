import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import getData from '../../services/getData'
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';
import { ProductDataContext } from '../../pages/Home';
import './productList.css'

function ProductList() {

    const [data] = useContext(ProductDataContext);

    // const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    // useEffect( () => {
    //     getData().then( res => {
    //         setData(res);
    //     })
    // },[]);

    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProduct = data.slice(firstIndex, lastIndex);

    const paginate = pageNum => {
        setCurrentPage(pageNum)
    }

    return (
        <>
            <Pagination  productsPerPage={productsPerPage} totalProducts={data.length} paginate={paginate}/>
            <div className="productItem__col">
                <div className="col-picture">Фото</div>
                <div className="col-name">Название</div>
                <div className="col-views">Просмотры</div>
                <div className="col-date-start">Начало ротации</div>
                <div className="col-date-end">Конец ротации</div>
            </div>
            {currentProduct.map( item => {
                return (
                    <ProductItem key={item.name} props={item}/>
                )
            }) }  
        </> 
    )
}

export default ProductList