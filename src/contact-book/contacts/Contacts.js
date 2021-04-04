import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h6 style={{ float: "right" }}>
                <i className="btn bg-secondary text-light fa fa-caret-up disabled">
                  {" "}
                  Expand All
                </i>
                <i className="btn bg-secondary text-light ml-2 fa fa-caret-down disabled">
                  {" "}
                  Collapse All
                </i>
              </h6>
              <br />
              <br />
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
