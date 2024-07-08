import React from 'react';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ProtectedRoute from './Auth/ProtectedRoute';

function App() {

  const [authenticated, setauthenticated] = useState(false);

  const handlelogin = () => {
    setauthenticated(true);
  }

  const handlesignup = () => {
    setauthenticated(true);
  }

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login onLogin={handlelogin} />} />
      <Route path='/signup' element={<Signup onSignup={handlesignup} />} />
      <Route path='/home' element={<ProtectedRoute authenticated={authenticated} component={<Home />} />} />
    </Routes>
  )
}

export default App