import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Contact extends Component {
  state = {
    contactDetailsVisible: false,
  };

  onClickShow(e) {
    this.setState({ contactDetailsVisible: !this.state.contactDetailsVisible });
  }

  onClickDelete = () => {
    this.props.deleteClickProp();
  };

  render() {
    const { name, email, phone } = this.props;
    const { contactDetailsVisible } = this.state;

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
          {name}{" "}
          {contactDetailsVisible ? (
            <i
              className="fa fa-caret-up"
              onClick={this.onClickShow.bind(this)}
              style={{ cursor: "pointer" }}
            ></i>
          ) : (
            <i
              className="fa fa-caret-down"
              onClick={this.onClickShow.bind(this)}
              style={{ cursor: "pointer" }}
            ></i>
          )}
          <i
            className="fa fa-times"
            onClick={this.onClickDelete}
            style={{ color: "red", cursor: "pointer", float: "right" }}
          ></i>
        </h4>
        {contactDetailsVisible ? (
          <ul className="list-group">
            <li className="list-group-item">
              <b>E-Mail</b>: {email}
            </li>
            <li className="list-group-item">
              <b>Phone</b>: {phone}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deleteClickProp: PropTypes.func,
};
