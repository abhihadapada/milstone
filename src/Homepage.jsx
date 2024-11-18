import React from 'react';
import './styles.css';


function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Food Business. All rights reserved.</p>
      <div>
        <a href="/menu">Menu</a> | 
        <a href="/cart">Cart</a> | 
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
