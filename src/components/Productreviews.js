import React from 'react'
import ProductreviewCard from './ProductreviewCard.js'
import "../styles/Productreviews.css"

const Productreviews = ({productReviews}) => {
  return (
    <div className='Productreviews'>
        {productReviews.map((item,index)=>(
        <ProductreviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
        ))}
    </div>
  )
}

export default Productreviews