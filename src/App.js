import { HashRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactBook from "./contact-book/ContactBook";
import FunTranslators from "./fun-translators/FunTranslators";
import HomePage from "./layouts/HomePage";
import Othello from "./othello/Othello";
import Page404 from "./layouts/Page404";
import TicTacToe from "./tic-tac-toe/TicTacToe";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact-book" component={ContactBook} />
          <Route path="/fun-translators" component={FunTranslators} />
          <Route path="/othello" component={Othello} />
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route component={Page404} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
