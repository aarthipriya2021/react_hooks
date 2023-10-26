import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
        <div className="collapse  navbar-collapse" >
          <div className="navbar-nav fixed-top justify-content-center">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-item nav-link" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
