import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Contact name="Test Name 1" email="test1@testing.com" phone="111" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
        <Contact name="Test Name 2" email="test2@testing.com" phone="222" />
      </div>
    </div>
  );
}

export default App;
