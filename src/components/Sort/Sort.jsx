import React, { useContext } from 'react'
import { BsSortUpAlt, BsSortUp} from 'react-icons/bs'
import { ProductDataContext } from '../../pages/Home'
import './sort.css'

function Sort() {
  const [data, setData] = useContext(ProductDataContext)
  const handleClickSort = () => {
    const sortedList = [...data];
    sortedList.sort((x,y) => x.name.localeCompare(y.name));
    setData(sortedList);
    
  } 

  return (
    <div className='sort'>
        <div className="sort-title">Сортировать:</div>
        <div className="sort__category" onClick={() => {handleClickSort()}}>по названию</div>
        <div className="sort__category">по просмотрам</div>
        <div className="sort__category">по дате начала</div>
        <div className="sort__category">по дате окончания</div>
    </div>
  )
}

export default Sort