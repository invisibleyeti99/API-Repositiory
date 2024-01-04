import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AnimationContext from './context/AnimationContext';
import Layout from './Layout/layout';
import Homepage from './Pages/Homepage/Homepage';
import Meditation from './Pages/Meditation/Meditation';
import Yoga from './Pages/Yoga/Yoga';
import Chakras from './Pages/Chakras/Chakras';
import LoginPage from './Pages/Loginsignup/LoginSignup';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };
  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div className='bg-slate-50 min-h-screen'>
        <Routes>
          <Route path='/API-Repositiory/' element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
          {isLoggedIn ? (
            <>
              {/* Protected Routes */}
              <Route path='/API-Repositiory/Home' element={<Homepage />} />
              {/* ... other routes */}
            </>
          ) : (
            <Route path='*' element={<Navigate to='/API-Repositiory/' />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;