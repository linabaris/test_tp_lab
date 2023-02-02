import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../../pages/Home';
import Pagination from '../Pagination/Pagination';
import ProductItem from '../ProductItem/ProductItem';

function ProductList() {

    const [data] = useContext(ProductDataContext);

    // const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);


    const lastIndex = currentPage * productsPerPage;
    const firstIndex = lastIndex - productsPerPage;
    const currentProduct = data.slice(firstIndex, lastIndex);

    const handleChangeAmount = (e) => {
        setProductsPerPage(Number(e.target.value))
    }

    const paginate = pageNum => {
        if(pageNum < 1 || pageNum > Math.ceil(data.length/productsPerPage)) {
            return;
        }
        setCurrentPage(pageNum)
        
    }

    return (
        <>
            <Pagination  productsPerPage={productsPerPage} totalProducts={data.length} paginate={paginate} currentPage={currentPage} handleChangeAmount={handleChangeAmount}/>
            <div className="productItem__col-name">
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