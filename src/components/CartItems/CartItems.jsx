import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

export const CartItems = () => {
  const { all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitemms-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        // Make sure to add a return statement here if there are other cases.
        return null;
      })}
    </div>
  );
};
