import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './LoginPopup.css';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    // Regex to validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    alert(`${currState} successful!`);
    // Here, you can add logic for form submission (e.g., API call).
  };

  const handleButtonClick = () => {
    setState(currState === 'Sign Up' ? 'Login' : 'Sign Up');
  };

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container" onSubmit={handleSubmit}>
        <div className="title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-input">
          {currState === 'Sign Up' && <input type="text" placeholder="Your name" required />}
          <input
            type="email"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" placeholder="password" required />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and conditions.</p>
        </div>
        <button type="submit">
          {currState === 'Sign Up' ? 'Sign Up' : 'Login'}
        </button>
        {currState === 'Login' ? (
          <p>
            Create a new account <span onClick={() => setState('Sign Up')}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? <span onClick={() => setState('Login')}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
