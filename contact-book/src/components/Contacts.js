import React, { Component } from "react";
import Contact from "./Contact";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Test Name 10",
          email: "test10@testing.com",
          phone: "101010",
          detailsVisible: false,
        },
        {
          id: 2,
          name: "Test Name 11",
          email: "test11@testing.com",
          phone: "111111",
          detailsVisible: false,
        },
        {
          id: 3,
          name: "Test Name 12",
          email: "test12@testing.com",
          phone: "121212",
          detailsVisible: false,
        },
        {
          id: 4,
          name: "Test Name 13",
          email: "test12@testing.com",
          phone: "131313",
          detailsVisible: false,
        },
        {
          id: 5,
          name: "Test Name 14",
          email: "test12@testing.com",
          phone: "141414",
          detailsVisible: false,
        },
      ],
    };
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: newContacts });
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
            deleteClickProp={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
