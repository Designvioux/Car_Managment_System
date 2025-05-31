import React, { useState } from 'react';
import './Login.css';
import cars from "./images/cars.jpg";
import logo from "./Images/logo (1).png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
   
  };

  return (
    <div className="login-container">
 <header className="login-header">
        <img src={logo} alt="Logo" className='brand-name' />
        <span className="brand-name">Fleet Master</span>
      </header>
    
    <div className="login-wrapper">
     

      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Welcome to Fleetmaster</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Input your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
<label>Password</label>
<div className="password-container">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Input your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <button
    type="button"
    className="eye-button"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </button>
</div>

        <div className="login-options">
          <label>
            <div className='checkbox'>
            <input 
              type="checkbox"
          
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
            </div>
          </label>
          <a href="#">Forgot password?</a>
          
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>
        <div className="images-container">
        <img src={cars} className='cars-img'></img>
    </div>
    

    </div>
  
     </div>
  );
};

export default Login;
