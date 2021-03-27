import React, { Component } from "react";

export default class Page404 extends Component {
  render() {
    return (
      <div>
        <h1
          className="font-weight-bold text-danger"
          style={{ fontSize: "2rem" }}
        >
          404: Page Not Found
        </h1>
        <p>Sorry, the page you are looking for doesn't exist.</p>
      </div>
    );
  }
}
