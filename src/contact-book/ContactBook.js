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
        <div className="container">
          <Switch>
            <Route path="/contact-book" component={Contacts} />
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
