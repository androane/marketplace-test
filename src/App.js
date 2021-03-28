import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { DataStore } from "@aws-amplify/datastore";
import { ShoppingList } from "./models";

const getShoppingList = async () => {
  const models = await DataStore.query(ShoppingList);
  console.log(models);
  models.forEach(m => {
    console.log("!");
    console.log(m.n);
  });
  return models;
};

function App() {
  const shoppingList = getShoppingList();
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        {shoppingList.map(l => (
          <div>{l.n.name}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
