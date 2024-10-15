// import React from 'react';
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light flex-row">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav d-flex flex-row">
//           <li className="nav-item">
//             <a className="nav-link box" href="#">
//               Home
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link box" href="#">
//               Instructions
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link box" href="#">
//               Tasks
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item">
            <a className="nav-link box" href="/">
              Home
            </a>
          </li>
          <Link to='/profile'>
          <li className="nav-item">
            <a className="nav-link box" href="#">
              Profile
            </a>
          </li>
          </Link>
          <Link to='/todo'>
          <li className="nav-item">
          
            <a className="nav-link box" href="#">
            Tasks
            </a>
         
          </li>
          </Link>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
