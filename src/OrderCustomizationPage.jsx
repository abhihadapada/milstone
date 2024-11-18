import React, { useState } from 'react';
import './styles.css';


function OrderCustomizationPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h2>Customize Your Order</h2>
      <p>Select options and quantity for your order.</p>
      <div>
        <label>Quantity: </label>
        <button onClick={() => setQuantity(prev => prev - 1)} disabled={quantity <= 1}>-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}

export default OrderCustomizationPage;
