import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./layouts/HomePage";
import ContactBook from "./contact-book/ContactBook";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import Page404 from "./layouts/Page404";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact-book/" component={ContactBook} />
          <Route exact path="/tic-tac-toe/" component={TicTacToe} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
