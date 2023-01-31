import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="nav-left">
        <li className="logo">
          <img src={logo} alt="logo" />
        </li>
        <h2>Space Travelers&apos; Hub</h2>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <NavLink to="/">Rocket</NavLink>
          </li>
          <li>
            <NavLink to="/">Mission</NavLink>
          </li>
          <li>
            <NavLink to="/">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
export default Navbar;
