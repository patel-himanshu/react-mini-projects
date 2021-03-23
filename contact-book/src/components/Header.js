import React, { useState } from "react";
import "./Header.css";

const Header = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm sticky-top mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fa fa-book" aria-hidden="true"></i>
          {props.branding}
        </a>

        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMobile"
          style={{ border: "1px solid black" }}
          onClick={navCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navbarMobile"
        >
          <ul className="navbar-nav nav-pills ml-auto">
            <li className="nav-item">
              <a className="nav-link pr-1 text-right" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: " Contact Book",
};

export default Header;
