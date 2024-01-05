import React, { useState } from 'react';
import axios from 'axios';
import '../login/login.css';
import { jwtDecode } from 'jwt-decode';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [response, setResponse] = useState(''); // State variable for response message
  const [userId, setUserId] = useState(''); // State variable for userId
  const [showPassword, setShowPassword] = useState(false); // State variable for show password

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all the fields.');
      return;
    }

    try {
      // https://basic-project-nu.vercel.app
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      const { token } = response.data;

      if (response.status === 200) {
        // Extract userId from the JWT token payload
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        // Handle successful login
        console.log('Login successful');
        setResponse('Login successful');

        // Store the token and userId in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);

        // Set userId in component state
        setUserId(userId);

        // Redirect to another page (e.g., /notes)
        window.location.href = '/main';
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Server error');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle show/hide password
  };

  return (
    <div className='body-login'>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card card-login" style={{ maxWidth: '400px', width: '100%', marginTop: '10%' }}>
          <div className="card-body">
            <h2 className="login card-title text-center">Login</h2>
            {error && <div className="alert alert-danger text-center" role="alert">{error}</div>}
            {response && (
              <div className={`alert ${response.includes('Successful') ? 'alert-danger' : 'alert-success'}`} role="alert">
                {response}
              </div>
            )}
            <form>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Button to toggle show/hide password */}
              <button type="button" onClick={toggleShowPassword} className="btn btn-warning mb-3 w-100">
                {showPassword ? 'Hide Password' : 'Show Password'}
              </button>

              <button type="button" className="btn btn-primary mt-3 w-100" onClick={handleLogin}>
                Login
              </button>
              <button type="button" className="btn btn-danger mt-3 w-100">
                <a className='text-white' href="/register" style={{ textDecoration: 'none' }}>Register</a>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
