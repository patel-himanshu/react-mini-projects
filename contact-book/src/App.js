import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
