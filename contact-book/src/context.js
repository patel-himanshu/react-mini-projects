import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
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
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
