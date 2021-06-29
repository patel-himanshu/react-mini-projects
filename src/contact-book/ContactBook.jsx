import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./ContactBook.css";
import Header from "./Header";
import Contacts from "./contacts/Contacts";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";
import { Provider } from "./context";

function ContactBook() {
  return (
    <Provider>
      <div className="ContactBook">
        <Header />
        <h1 className="font-weight-bold d-flex justify-content-center text-danger mb-4">
          <i className="fa fa-book mr-3" aria-hidden="true"></i>
          Contact Book
        </h1>
        <div className="container">
          <Switch>
            <Route exact path="/contact-book" component={Contacts} />
            <Route
              exact
              path="/contact-book/add-contact"
              component={AddContact}
            />
            <Route
              path="/contact-book/edit-contact/:id"
              component={EditContact}
            />
          </Switch>
        </div>
      </div>
    </Provider>
  );
}

export default ContactBook;
