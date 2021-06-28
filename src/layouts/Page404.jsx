import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Page404 extends Component {
  render() {
    return (
      <div className="container mt-4">
        <h1
          className="font-weight-bold text-danger"
          style={{ fontSize: "2.25rem" }}
        >
          404: Page Not Found
        </h1>
        <p>
          Sorry, the page you are looking for doesn't exist.
          <br />
          Go back to <Link to="/">Home</Link>.
        </p>
      </div>
    );
  }
}
