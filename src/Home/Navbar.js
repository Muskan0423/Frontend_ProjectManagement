import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { MdLogout, MdSupport } from 'react-icons/md'; 
import SupportModal from './SupportModal'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <Link className="nav-div box" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-div box" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-div box" to="/todo">Tasks</Link>
            </li>
          </ul>
        </div>
        <div className="logout-icon">
          <Link onClick={handleLogout} className="nav-div">
            <MdLogout size={29} />
          </Link>
        </div>
      </nav>
      <div className="support-icon" onClick={() => setShowModal(true)}>
        <MdSupport size={40} />
      </div>
      {showModal && <SupportModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Navbar;
