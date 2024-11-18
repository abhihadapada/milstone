import React, { useState } from 'react';
import './styles.css';


function SignUpLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign up logic
  };

  return (
    <div>
      <h2>Sign Up / Login</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpLoginPage;
