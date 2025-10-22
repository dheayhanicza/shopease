import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const totalCount = useSelector(state => state.cart.items.reduce((s, it) => s + it.quantity, 0));

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, background: '#0f5132', color: 'white' }}>
      <div>
        <Link to="/" style={{ color: 'white' }}>
          <h2 style={{ margin: 0 }}>ShopEase</h2>
        </Link>
      </div>

      <nav>
        <Link to="/products" style={{ marginRight: 16, color: 'white' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white' }}>🛒 {totalCount}</Link>
      </nav>
    </header>
  );
}
