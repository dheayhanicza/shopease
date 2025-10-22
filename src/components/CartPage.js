import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((s, it) => s + it.quantity, 0);
  const totalCost = items.reduce((s, it) => s + it.quantity * it.price, 0);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Shop products</Link></p>
      ) : (
        <>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
              <img src={item.image} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover' }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ margin: 0 }}>{item.name}</h4>
                <p style={{ margin: 0 }}>${item.price.toFixed(2)} each</p>
                <div style={{ marginTop: 8 }}>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(removeItem(item.id))} style={{ marginLeft: 12 }}>Delete</button>
                </div>
              </div>
              <div>
                <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              </div>
            </div>
          ))}

          <div style={{ marginTop: 16 }}>
            <p>Total items: <strong>{totalItems}</strong></p>
            <p>Total cost: <strong>${totalCost.toFixed(2)}</strong></p>
          </div>

          <div style={{ marginTop: 12 }}>
            <button disabled>Checkout - Coming Soon</button>
            <Link to="/products" style={{ marginLeft: 12 }}>Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  );
}
