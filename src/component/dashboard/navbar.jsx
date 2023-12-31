import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.username) {
        setUsername(decodedToken.username);
      }
    }
  }, []);

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    // Redirect to the login page
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ms-">
      <div className="container-fluid">
        <img src="css/sk.webp" alt="" height="34" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="#">S.K. Electricals</a>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><a href="#footer" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="#testo" className="nav-link">Testimonials</a></li>
            <li className="nav-item"><a href="#testo" className="nav-link">
            {username && (
              <span className="navbar-text mx-2" style={{ color: 'white' }}>
                Welcome, {username}
              </span>
            )}
            </a></li>
          </ul>
          <button className='mx-2 btn btn-danger' onClick={handleLogout}>
            Logout
          </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
