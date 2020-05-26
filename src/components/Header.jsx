import React from "react";
import { Link } from "react-router-dom";

/**
 * Heaser
 *
 * @returns {JSX}
 */
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__title">Welcome to Posts</div>
        <Link to="/login">
          <button className="header__logout-button" onClick={() => localStorage.clear()}>Logout</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
