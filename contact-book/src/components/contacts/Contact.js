import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";

export default class Contact extends Component {
  state = {
    contactDetailsVisible: false,
  };

  onClickShow(e) {
    this.setState({ contactDetailsVisible: !this.state.contactDetailsVisible });
  }

  onClickDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { contactDetailsVisible } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
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
                {/* Contact Name section */}
                {name}{" "}
                {contactDetailsVisible ? (
                  <i
                    className="fa fa-caret-up pr-4"
                    onClick={this.onClickShow.bind(this)}
                    style={{ cursor: "pointer", float: "left" }}
                  ></i>
                ) : (
                  <i
                    className="fa fa-caret-down pr-4"
                    onClick={this.onClickShow.bind(this)}
                    style={{ cursor: "pointer", float: "left" }}
                  ></i>
                )}
                {/* Contact Delete section */}
                <i
                  className="fa fa-times"
                  onClick={this.onClickDelete.bind(this, id, dispatch)}
                  style={{ color: "red", cursor: "pointer", float: "right" }}
                ></i>
              </h4>
              {/* Contact Details Visibility section */}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
