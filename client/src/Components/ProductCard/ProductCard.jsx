import React from 'react';
import './ProductCard.css';
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from '../../cartSlice';

const ProductCard = ({ product }) => {
  const { name, price, image, description, originalPrice, offer } = product;
  const off = Math.round((originalPrice-price)/originalPrice*100)

  const dispatch = useDispatch()


  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
        <span className='rating'>4 <i class="fa-solid fa-star" style={{color:'#00827f'}}></i> | <span> 3.2k</span></span>
      </div>

      <div className="product-details">
        <p className='product-name'>{name}</p>
        <p className="product-description">{description}</p>
        <p className="product-price">Rs. {price} <span className='product-originalPrice'>Rs. {originalPrice}</span> <span className='product-offer'>({off}% OFF)</span> </p>
      </div>

      <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
