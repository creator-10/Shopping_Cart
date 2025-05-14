
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, decrementQty, removeFromCart } from '../../store/cartSlice'
import './cart.css'

export default function Cart() {
  const items    = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  if (items.length === 0) {
    return <p className="empty-cart">Your cart is empty.</p>
  }

  return (
    <>
    <div className="cart-container">
      {items.map(item => (
        <div className="cart-item" key={item.product.id}>
          <img src={item.product.image} alt={item.product.name}/>
          <div className="details">
            <p>{item.product.name}</p>
            <p>${item.product.price}</p>
            <div className="qty-controls">
              <button onClick={() => dispatch(decrementQty(item.product))}>−</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item.product))}>+</button>
            </div>
          </div>
          <button
            className="remove-btn"
            onClick={() => dispatch(removeFromCart(item.product))}
          >
            ✕
          </button>
        </div>
      ))}
      
    </div>
    <div className="cart-total">
      
      Total: $
      {items
        .reduce((sum, { product, quantity }) => sum + (product.price ?? 0) * quantity, 0)
        .toFixed(2)}
        <button>Pay Now</button>
    </div>
    </>
  )
}
