import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./layouts/HomePage";
import ContactBook from "./contact-book/ContactBook";
import TicTacToe from "./tic-tac-toe/TicTacToe";
import Page404 from "./layouts/Page404";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact-book" component={ContactBook} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
