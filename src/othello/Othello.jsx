import React from "react";
import { Link } from "react-router-dom";
import Instructions from "./Instructions";

const Othello = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm sticky-top mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React Mini-Projects
          </Link>
        </div>
      </nav>
      <div className="container">
        <h1 className="font-weight-bold d-flex justify-content-center align-items-center text-success mb-4">
          <i className="fa fa-th mr-3" aria-hidden="true"></i>
          Othello
        </h1>
      </div>
      <Instructions />
    </>
  );
};

export default Othello;
