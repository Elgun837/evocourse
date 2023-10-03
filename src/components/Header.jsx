import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <div>Logo</div>
        <div>
          <ul>
            <li>
              <Link to="/homepage">Homepage</Link>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
