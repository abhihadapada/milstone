import React from 'react';
import './styles.css';


function ContactPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
