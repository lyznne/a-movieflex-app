import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import MoviesApp from './components/MoviesApp';

const App = () => {
  const [user, setUser] = useState(true);

  return (
    <div className="app">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/" className="logo">
            Happy Teens
          </Link>

          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">Category</Link>
                </li>
              </>
            ) : null}
            <li className="nav-item">
              {!user ? (
                <Link to="/signin" className="nav-link">Sign In</Link>
              ) : null}
            </li>
            <li className="nav-item">
              {!user ? (
                <Link to="/login" className="nav-link">Login</Link>
              ) : null}
            </li>
          </ul>
        </div>
        <Routes >
          <Route path='/signin' element={<Register setUser={setUser} />} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          {user ? (
            <>
              <Route path='/' element={<MoviesApp />} />
              <Route path='*' element={<Navigate to="/" />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Navigate to="/login" />} />
              <Route path='*' element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
