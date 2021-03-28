import logo from "./logo.svg";
import "./App.css";

import { DataStore } from "@aws-amplify/datastore";
import { ShoppingList } from "./models";

await DataStore.save(
  new ShoppingList({
    name: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet"
  })
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
