import React from 'react';
import { Link } from 'react-router-dom';

type NavBarProps = {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const NavBar =() => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fs-5">
        <div className="container">
          <Link className="navbar-brand" to="/">MR</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reservationform">Reservation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewreservation">View Reservation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;