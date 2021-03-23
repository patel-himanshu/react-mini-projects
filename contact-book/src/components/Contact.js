import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  render() {
    const { name, email, phone } = this.props;

    return (
      <div
        className="card card-body mb-4"
        style={{ boxShadow: "5px 5px 10px grey" }}
      >
        <h4
          style={{
            fontWeight: "500",
            fontFamily: "'Times New Roman', Serif, serif",
          }}
        >
          {name}
        </h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>E-Mail</b>: {email}
          </li>
          <li className="list-group-item">
            <b>Phone</b>: {phone}
          </li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
