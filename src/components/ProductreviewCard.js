import React from 'react'
import '../styles/ProductreviewCard.css'

const ProductreviewCard = ({name,price,index,image,review}) => {
  return (
    <div className='ProductreviewCard'>
     <img src={image} alt={`${index} review`} />
     <h5>{review}</h5>
     <span>{name}</span>
     <b>{price}</b>
    </div>
  )
}

export default ProductreviewCard