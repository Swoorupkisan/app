import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({id,name,price,descreption,image}) => {
  return (
    <div>
      <div className='food-item'>
          <div className='food-item-image-conatiner'>
            <img className='food-item-image' src={image} alt="" />
          </div>
          <div className='food-item-info'>
            <div className="food-item-naem-rating">
              <p>{name}</p>
              <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{descreption}</p>
            <p className="food-item-price">${price}</p>

          </div>
      </div>
      
    </div>
  )
}

export default FoodItem
