import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";

import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider>
      <div className="App">
        <Header />
        <div className="container">
          <AddContact />
          <Contacts />
        </div>
      </div>
    </Provider>
  );
}

export default App;
