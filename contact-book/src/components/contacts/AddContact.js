import React, { Component } from "react";
import { Consumer } from "../../context";
import FormInputField from "../FormInputField";
import { v1 as uuid } from "uuid";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onFieldChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClickSubmit = async (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "E-Mail is required" } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone Number is required" } });
      return;
    }
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: response.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card mb-3 w-75 mx-auto">
              <div
                className="card-header font-weight-bold w-100 d-flex justify-content-center"
                style={{ fontSize: "1.5rem" }}
              >
                Add New Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onClickSubmit.bind(this, dispatch)}>
                  {/* Name Input */}
                  <FormInputField
                    label="Name :"
                    name="name"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={this.onFieldChange}
                    error={errors.name}
                  />
                  {/* E-Mail Input */}
                  <FormInputField
                    label="E-Mail :"
                    type="email"
                    name="email"
                    placeholder="Enter your E-Mail"
                    value={email}
                    onChange={this.onFieldChange}
                    error={errors.email}
                  />
                  {/* Phone Input */}
                  <FormInputField
                    label="Phone Number :"
                    name="phone"
                    placeholder="Enter your Phone Number"
                    value={phone}
                    onChange={this.onFieldChange}
                    error={errors.phone}
                  />
                  {/* Submit Button */}
                  <input
                    className="btn btn-sm btn-block bg-primary text-light font-weight-bold w-50 mx-auto"
                    type="submit"
                    value="Add Contact"
                  ></input>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
