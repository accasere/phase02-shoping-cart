import React from 'react'
import './Cart.css'

export default function Cart( {cartItems, handleRemove, handleAddCart, handleClearCart}) {

    const totalPrice = cartItems.reduce((price,item) => price + item.quantity * item.price,0)
  return (
    <div className="cart-items">
      <h2 className='cart-items-header'>Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleClearCart}>Clear Cart</button>
        )}
      </div>
      {cartItems.length === 0 && <div className='cart-items-empty'>No items are added to the cart!</div>}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-tems-list">
              <img className='cart-items-image' src={item.image} alt={item.title}/>

              <div className="cart-items-name">{item.title}</div>
              <div className="cart-items-function">
                <button className="cart-items-add" onClick={()=> handleAddCart(item)}>+</button>
                <button className="cart-items-remove" onClick={()=> handleRemove(item)}>-</button>
              </div>
              <div className='cart-items-price'>
                {item.quantity} * ${item.price}
              </div>
          </div>          
        ))}

      <div className='cart-items-total-price-name' >
          Total Price: 
          <div className='cart-items-total-price'>${totalPrice}</div>
      </div>
      </div>



    </div>
  
  )
}

