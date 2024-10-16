import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md'; 

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <Link className="nav-div box" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-div box" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-div box" to="/todo">
              Tasks
            </Link>
          </li>
        </ul>
      </div>
      <div className="logout-icon">
        <Link onClick={handleLogout} className="nav-div">
          <MdLogout size={29}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
