import React from 'react'
import { useParams  } from 'react-router-dom'
import data from '../products.json';

function ProductCard() {

    let params = useParams().id;
    
  return (
    data.map(item => {
        
        if(item.name.replace('/','-') === params) {
            return(
                <>
                    <div className='discount'>
                        {item.discount}
                    </div>
                    <div className="logo">
                        <img src={item.logo_url} alt="logo" />
                    </div>
                    <div className="product-img">
                        <img src={item.image_url} alt="product" />
                    </div>
                    <div className="product__name">{item.name}</div>

                </>
            )
        }
    })
  )
}

export default ProductCard