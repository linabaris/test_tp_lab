import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../../pages/Home'

function Sort(param) {

  const [sortConfig, setSortConfig] = useState({key:'name', direction: 'ascending'});
  const [data, setData] = useContext(ProductDataContext)
  // const [sortOrder, setSortOder] = useState('ascending');
  const handleClickSort = (key) => {
    const sortedList = [...data];
    sortedList.sort((x,y) => {
      if(x[key] < y[key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if(x[key] > y[key]) {
        return sortConfig.direction === 'ascending'?  1: -1
      }
      return 0;
    });
    if(sortConfig.direction === 'ascending') {
      setSortConfig({key, direction: 'discending'})
    } else {
      setSortConfig({key, direction:'ascending'})
    }
    setData(sortedList);
    
  } 



  const getClassNamesFor = (key) => {
    if(sortConfig.key === key && sortConfig.direction === 'ascending'){
      return 'active ascending'
    } if(sortConfig.key === key && sortConfig.direction === 'discending') {
      return 'active discending'
    } else {
      return '';
    }

  }
  // useMemo( () => {
  //   const sortedList = [...data];
  //   if(sortConfig.key !== null) {
  //     sortedList.sort((a,b) => {
  //       if(a[sortConfig.key] < b[sortConfig.key]) {
  //         return sortConfig.direction === 'ascending' ? -1 : 1;
  //       }
  //       if(a[sortConfig.key] > b[sortConfig.key]) {
  //         return sortConfig.direction === 'ascending' ? 1 : -1;
  //       }
  //       return 0;
  //     })
  //   }
  // }, [data, sortConfig])

  // const requestSort = key => {
  //   let direction = 'ascending';
  //   if(sortConfig.key === key && sortConfig.direction === 'ascending') {
  //     direction = 'descending';
  //   }
  //   setSortConfig({ key, direction})
  // }

  return (
    <div className='sort'>
        <div className="sort__title">Сортировать:</div>
        <div 
          className={`sort__category ${getClassNamesFor('name')}`} 
          onClick={() => handleClickSort('name')}>
            по названию
        </div>
        <div 
          className={`sort__category ${getClassNamesFor('views')}`} 
          onClick={() => handleClickSort('views')}>
            по просмотрам
        </div>
        <div 
          className={`sort__category ${getClassNamesFor('start_date')}`} 
          onClick={() => handleClickSort('start_date')}>
            по дате начала
        </div>
        <div 
          className={`sort__category ${getClassNamesFor('end_date')}`} 
          onClick={() => handleClickSort('end_date')}>
            по дате окончания
        </div>
    </div>
  )
}
export default Sort