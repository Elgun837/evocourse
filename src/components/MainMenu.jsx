import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Language from "./Language";

function MainMenu() {
  return (
    <Container>
          <nav>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Homepage</Link>
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
                <li>
                  <Language />
                </li>
              </ul>
            </div>
          </nav>
        </Container>
  )
}

export default MainMenu