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
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
