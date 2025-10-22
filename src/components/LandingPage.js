import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div style={{
      minHeight: '70vh',
      backgroundImage: 'url(https://via.placeholder.com/1200x400?text=ShopEase+Banner)',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }}>
      <div style={{ background: 'rgba(0,0,0,0.45)', padding: 24, borderRadius: 8, textAlign: 'center' }}>
        <h1>ShopEase</h1>
        <p>Your mini e-commerce demo — browse products and manage your cart.</p>
        <Link to="/products"><button style={{ padding: '8px 16px', fontSize: 16 }}>Get Started</button></Link>
      </div>
    </div>
  );
}
