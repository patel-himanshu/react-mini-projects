import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import Page404 from "./components/Page404";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add-contact" component={AddContact} />
              <Route component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
