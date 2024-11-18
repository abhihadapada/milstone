import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Homepage';
import MenuPage from './MenuPage';
import OrderCustomizationPage from './OrderCustomizationPage';
import CartPage from './CartPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import SignUpLoginPage from './SignUpLoginPage';
// import FeedbackForm from './FeedbackForm';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/customize" element={<OrderCustomizationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpLoginPage />} />
          {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
