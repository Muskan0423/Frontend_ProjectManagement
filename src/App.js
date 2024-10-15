import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Todo from './To-Do/Todo';
import Home from './Home/Home'
import LoginSignup from './LoginSignUp/LoginSignup'; 
import Profile from './Home/Profile';


function App() {
  const token = localStorage.getItem('token');


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={token ? <Home/>: <LoginSignup />} />
          <Route path="/profile" element={token ? <Profile/>: <LoginSignup />} />
          <Route path="/todo" element={token ? <Todo token={token} /> : <LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
