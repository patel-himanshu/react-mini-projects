import React, { Component } from "react";
import { Link } from "react-router-dom";
import Translator from "./Translator";

export default class FunTranslators extends Component {
  render() {
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
          <h1 className="font-weight-bold d-flex justify-content-center text-primary mb-4">
            <i className="fa fa-language mr-2" aria-hidden="true"></i>
            Fun Translators
          </h1>
          <Translator />
          <p className="text-danger text-center">
            <b>
              Note: You can only make 5 translations per hour, before getting an
              error message.
            </b>
          </p>
        </div>
      </>
    );
  }
}
