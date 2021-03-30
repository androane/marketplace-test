import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { DataStore } from "@aws-amplify/datastore";
import { ShoppingList } from "./models";

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const getShoppingList = async () => {
    const models = await DataStore.query(ShoppingList);
    setShoppingList(models);
  };

  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => getShoppingList()}>Butonul lui Dorin</button>
        {shoppingList.map(l => (
          <div>{l.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
