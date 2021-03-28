import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1 className="mb-4">React Mini Projects :</h1>
        <ul className="list-group">
          <li className="list-group-item" style={{ fontSize: "1.5rem" }}>
            <Link to="/contact-book">Contact Book</Link>
          </li>
          <li className="list-group-item" style={{ fontSize: "1.5rem" }}>
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </li>
        </ul>
      </div>
    );
  }
}
