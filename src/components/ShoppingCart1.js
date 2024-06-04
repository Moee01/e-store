// ShoppingCart.js
import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ cart, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default ShoppingCart;
