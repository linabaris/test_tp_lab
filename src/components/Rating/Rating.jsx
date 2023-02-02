import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

function Rating({props}) {

    let ratingArr = new Array(5).fill(0);
  return (
    props !== 0 ? (ratingArr.fill(1,0,props).map((item, index) => {
        if(item!==0) {return <AiFillStar key={index}/>}
        else {return <AiOutlineStar key={index}/>}
    })):(
        ''
    )
  )
}

export default Rating