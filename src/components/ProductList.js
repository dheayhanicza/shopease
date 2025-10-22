import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductList() {
  const products = useSelector(state => state.products.items);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const categories = [...new Set(products.map(p => p.category))];
  const inCartIds = cartItems.map(i => i.id);

  return (
    <div className="container">
      <h2>Products</h2>
      {categories.map(cat => (
        <section key={cat} style={{ marginBottom: 24 }}>
          <h3>{cat}</h3>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {products.filter(p => p.category === cat).map(p => (
              <div key={p.id} className="card" style={{ width: 200 }}>
                <img src={p.image} alt={p.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <h4 style={{ margin: '8px 0' }}>{p.name}</h4>
                <p>${p.price.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(addToCart(p))}
                  disabled={inCartIds.includes(p.id)}
                >
                  {inCartIds.includes(p.id) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
