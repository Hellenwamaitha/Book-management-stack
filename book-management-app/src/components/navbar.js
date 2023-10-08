import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Book Management</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorites">Favorites</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">User Profile</Link>
          </li>
        </ul>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="categoryDropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Categories
          </button>
          <div className="dropdown-menu" aria-labelledby="categoryDropdown">
            <Link className="dropdown-item" to="/category/1">Romance</Link>
            <Link className="dropdown-item" to="/category/2">Fiction </Link>
            <Link className="dropdown-item" to="/category/3">Children </Link>
            <Link className="dropdown-item" to="/category/4">Thriller </Link>
            <Link className="dropdown-item" to="/category/5">Mystery </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
