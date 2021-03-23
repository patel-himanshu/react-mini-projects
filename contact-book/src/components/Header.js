import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-light mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="fa fa-book" aria-hidden="true"></i>
            {this.props.branding}
          </a>

          <div>
            <ul className="navbar-nav nav-pills ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: " Contact Book",
};
