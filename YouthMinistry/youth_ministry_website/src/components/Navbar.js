import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Youth Ministry</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/support">Support Us</Link></li>
        <li><Link to="/youth-research">Youth Research</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}