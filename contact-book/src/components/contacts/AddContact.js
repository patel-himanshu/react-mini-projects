import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  render() {
    const { name, email, phone } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add New Contact</div>
              <div className="card-body">
                <form onSubmit={this.onClickSubmit.bind(this, dispatch)}>
                  <div className="form-group">
                    {/* Name Input */}
                    <label htmlFor="name">Name</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={this.onFieldChange}
                    ></input>
                    <br />
                    {/* E-Mail Input */}
                    <label htmlFor="email">E-Mail</label>
                    <input
                      className="form-control form-control-sm"
                      type="email"
                      name="email"
                      placeholder="Enter your E-Mail"
                      value={email}
                      onChange={this.onFieldChange}
                    ></input>
                    <br />
                    {/* Phone Input */}
                    <label htmlFor="phone">Phone</label>
                    <input
                      className="form-control form-control-sm"
                      type="number"
                      name="phone"
                      placeholder="Enter your Phone Number"
                      value={phone}
                      onChange={this.onFieldChange}
                    ></input>
                    <br />
                    {/* Submit Button */}
                    <input
                      className="btn btn-block bg-primary text-light"
                      type="submit"
                      value="Add Contact"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
