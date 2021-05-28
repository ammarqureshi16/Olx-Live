import React from "react";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-text">
        <div className="logo">
          {/* <img src="logo" alt="logo" /> */}
          <ul className="navbar-ul">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">MENU</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">SHOP</a>
            </li>
            <li>
              <a href="">NEWS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
