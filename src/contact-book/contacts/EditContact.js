import React, { Component } from "react";
import { Consumer } from "../context";
import FormInputField from "./FormInputField";
import axios from "axios";

export default class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const contact = response.data;
    this.setState({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
    });
  }

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

    const { id } = this.props.match.params;
    const updatedContact = { name, email, phone };

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updatedContact
    );

    dispatch({ type: "UPDATE_CONTACT", payload: response.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {},
    });

    this.props.history.push("/contact-book/");
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
                Edit Existing Contact
              </div>
              <div className="card-body">
                <form onSubmit={this.onClickSubmit.bind(this, dispatch)}>
                  {/* Name Input */}
                  <FormInputField
                    label="Name :"
                    name="name"
                    placeholder={"Enter your Name"}
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
                    value="Edit Contact"
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
