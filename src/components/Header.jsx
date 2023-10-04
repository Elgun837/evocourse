import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
const Header = () => {
  return (
    <>
      <header>
        <Container>
          <nav>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/homepage">Homepage</Link>
                </li>
                <li>
                  <Link to="/about-us">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
