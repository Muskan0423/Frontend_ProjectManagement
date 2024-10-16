import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginSignup.css';

const apiUrl = 'http://localhost:5001/api';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const url = isLogin ? `${apiUrl}/users/login` : `${apiUrl}/users/signup`;

    try {
      const response = await axios.post(url, formData);
      console.log(response);
      
      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        alert('Login successful!');
        window.location.reload()
        navigate('/todo'); 
      } else {
        alert('Signup successful! You can now log in.');
      }
      setFormData({ username: '', email: '', password: '' });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="login-signup-container">
   <h2 style={{ fontFamily: 'cursive, sans-serif', fontSize: '26px', color: '#7d76df' }}>
  {isLogin ? 'Login' : 'Signup'}
</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <input
            placeholder='Enter Username'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div>
        
          <input
            type="email"
            name="email"
            placeholder='Enter Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
        
          <input
          placeholder='Enter Your Password'
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <div className="flex-container">
  <Link className='switch-link' onClick={() => setIsLogin(!isLogin)}>
    Switch to {isLogin ? 'Signup' : 'Login'}
  </Link>
</div>

    </div>
  );
};

export default LoginSignup;
