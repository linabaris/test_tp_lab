import React from 'react'
import { useParams  } from 'react-router-dom'
import data from '../../products.json';
import Rating from '../Rating/Rating';

function ProductCard() {

    let params = useParams().id;

    const getBodyPrice = (str) => {
        if(String(str).includes(',') || String(str).includes('.')) {
            return String(str).replace(/(,|.)\d+$/,'')
        }
        return str
    }
    const getRemainderPrice = (str) => {
        if(String(str).includes(',') || String(str).includes('.')) {
            return String(str).replace(/^\d+(,|.)/,'')
        }
        return '';
        
    }
    
  return (
    data.map(item => {
        if(item.name.replace('/','-') === params) {
            return(
                <>
                    <div className="card__container" key={item.name}>
                        <div className="card__header card-header">
                            <div className='card-header__discount'>
                                {`-${item.discount}%`}
                            </div>
                            <div className="card-header__logo">
                                <img src={item.logo_url} alt="logo" />
                            </div>
                        </div>
                        <div className="card__body">
                            <div className="card__img">
                                <img src={item.image_url} alt="product" />
                            </div>
                            <div className="card__info">
                                <div className="card__name">{item.name}</div>
                                <div className="card__rating">
                                    <Rating props={item.stars}/>
                                </div>
                                <div className="card__prices prices">
                                    <div className="price price-old">
                                        <div className="price-old__value_full">
                                            <span className='price-old__value_body'>{`${getBodyPrice(item.old_price)} `}</span>
                                            <span className='price-old__value_remainder'>{`${getRemainderPrice(item.old_price)} ₽`}</span>
                                        </div>
                                        <span className='price-old__text'>СТАРАЯ ЦЕНА</span>
                                    </div>
                                    <div className="price price-new">
                                        <div className="price-new__value_full">
                                            <span className='price-new__value_body'>{`${getBodyPrice(item.new_price)} `}</span>
                                            <span className='price-new__value_remainder'>{`${getRemainderPrice(item.new_price)} ₽`}</span>
                                        </div>
                                        <span className='price-new__text'>ЦЕНА ПО АКЦИИ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {item.disclaimer && 
                    <div className="card__footer card-footer">
                        <span className='card-footer__action-description'>{item.disclaimer}</span>
                    </div>}
                    
                </>
            )
        }
    })
  )
}

export default ProductCard