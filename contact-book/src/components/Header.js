import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const navCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-sm sticky-top mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="fa fa-book" aria-hidden="true"></i>
          {props.branding}
        </Link>

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
              <Link className="nav-link pl-2 pr-2 mr-1 ml-1 text-right" to="/">
                <i className="fa fa-home"> Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link pl-2 pr-2 mr-1 ml-1 text-right"
                to="/add-contact"
              >
                <i className="fa fa-plus"> Add Contact</i>
              </Link>
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
