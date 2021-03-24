import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
