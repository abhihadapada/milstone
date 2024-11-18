import React, { useState } from 'react';
import './styles.css';

function MenuPage() {
  const [filter, setFilter] = useState('All');
  const [cart, setCart] = useState([]);

  const menuItems = [
    { id: 1, name: 'Pasta', category: 'Main Course', price: 12 },
    { id: 2, name: 'Salad', category: 'Starters', price: 7 },
    // Add more items here
  ];

  const filteredItems = filter === 'All' ? menuItems : menuItems.filter(item => item.category === filter);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div>
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Starters')}>Starters</button>
        <button onClick={() => setFilter('Main Course')}>Main Course</button>
        {/* Add more filter buttons */}
      </div>

      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2>Your Cart</h2>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
