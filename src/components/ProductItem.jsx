import { Link } from 'react-router-dom';
import './productItem.css';

export default function ProductItem({props}) {
  const transformDate = (date) => {
    const newDate = date.replace(/\//gm,'.');
    return newDate.split('.').map(item => {
      if (item.length === 1) {
        return `0${item}`
      } else {
        return item;
      }
    }).join('.');
  };

  return (
    <div className='item'>
      <div className="item__image">
        <img src={props.image_url} alt="" />
      </div>
      <div className="item__title">
        <Link to={`/card/${props.name.replace('/','-')}`}>
          <span className='item__name'>{props.name}</span>
        </Link>
        <span className='item__category'>{props.category}</span>
      </div>
      <div className="item__views">{props.views}</div>
      <div className="item__start">{transformDate(props.start_date)}</div>
      <div className="item__end">{transformDate(props.end_date)}</div>
    </div>
  )
}