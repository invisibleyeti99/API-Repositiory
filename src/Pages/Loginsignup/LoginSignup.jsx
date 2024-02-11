import React, { useState } from 'react';
import "./LoginSignup.css";
import { useNavigate } from 'react-router-dom';

const LoginSignup = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace these with your actual credentials
    const hardcodedUsername = 'user123';
    const hardcodedPassword = 'rsd';

    if (username === hardcodedUsername && password === hardcodedPassword) {
      onLoginSuccess();
      navigate('/API-Repositiory/Home'); // Navigate to the homepage
    } else {
      alert('Invalid username or password');
    }
  };

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="container">
          <div className="header">
            <div className="text">Login</div>
            <div className = "underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='UserName'></input> 
            </div>
            <div className="input">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'></input> 
            </div>
          </div>
          <div className="submit-container">
            <button type="submit" className="submit">Login</button>
          </div>
      </div>
    </form>
 );
}

export default LoginSignup;



