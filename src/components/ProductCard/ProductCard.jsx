import React from 'react'
import { useParams  } from 'react-router-dom'
import data from '../../products.json';
import './productCard.css'

function ProductCard() {

    let params = useParams().id;
    
  return (
    <div className="card__container">

        {data.map(item => {
            
            if(item.name.replace('/','-') === params) {
                return(
                    <>
                        <div className="card__header">
                            <div className='discount'>
                                {`-${item.discount}%`}
                            </div>
                            <div className="logo">
                                <img src={item.logo_url} alt="logo" />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="product-img">
                                <img src={item.image_url} alt="product" />
                            </div>
                            <div className="product__info">
                                <div className="product__name">{item.name}</div>
                                <div className="product__price">
                                    <div className="price">
                                        <span className='price-old'>{item.old_price}</span>
                                        <span className='price-old-text'>Старая цена</span>
                                    </div>
                                    <div className="price">
                                        <span className='price-new'>{item.new_price}</span>
                                        <span className='price-new-text'>Новая цена</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )
            }
        })}

    </div>
  )
}

export default ProductCard